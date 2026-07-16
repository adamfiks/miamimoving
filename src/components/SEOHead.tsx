import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "https://miami-moving.com/og-image.jpg",
  breadcrumbs,
  jsonLd,
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    const breadcrumbScriptId = "seo-breadcrumb-jsonld";
    let breadcrumbScript = document.getElementById(breadcrumbScriptId) as HTMLScriptElement | null;
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      };
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement("script");
        breadcrumbScript.id = breadcrumbScriptId;
        breadcrumbScript.type = "application/ld+json";
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbLd);
    }

    const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    const extraIdPrefix = "seo-extra-jsonld-";

    document
      .querySelectorAll(`script[id^="${extraIdPrefix}"]`)
      .forEach((el) => {
        const idx = parseInt(el.id.replace(extraIdPrefix, ""), 10);
        if (idx >= jsonLdArray.length) el.remove();
      });

    jsonLdArray.forEach((block, i) => {
      const id = `${extraIdPrefix}${i}`;
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(block);
    });

    return () => {
      document.title = "Miami Moving | Professional Movers in Miami & South Florida";
      document.getElementById(breadcrumbScriptId)?.remove();
      document.querySelectorAll(`script[id^="${extraIdPrefix}"]`).forEach((el) => el.remove());
    };
  }, [title, description, canonical, ogImage, breadcrumbs, jsonLd]);

  return null;
};

export default SEOHead;
