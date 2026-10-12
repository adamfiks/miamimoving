import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteSeo } from "@/lib/seo";

const JSONLD_PREFIX = "seo-jsonld-";

/**
 * Keeps <head> in sync with the current route during client-side navigation.
 * The prerendered HTML already contains identical tags (same ids), so on first
 * load this just rewrites them in place.
 */
const RouteSEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(pathname);
    document.title = seo.title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", seo.description);
    setMeta("og:title", seo.title, "property");
    setMeta("og:description", seo.description, "property");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);

    const robots = document.querySelector('meta[name="robots"]');
    if (seo.noindex) setMeta("robots", "noindex");
    else robots?.remove();

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (seo.canonical) {
      setMeta("og:url", seo.canonical, "property");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", seo.canonical);
    } else {
      link?.remove();
    }

    document.querySelectorAll(`script[id^="${JSONLD_PREFIX}"]`).forEach((el) => {
      const idx = parseInt(el.id.slice(JSONLD_PREFIX.length), 10);
      if (!(idx < seo.jsonLd.length)) el.remove();
    });
    seo.jsonLd.forEach((block, i) => {
      const id = `${JSONLD_PREFIX}${i}`;
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(block);
    });
  }, [pathname]);

  return null;
};

export default RouteSEO;
