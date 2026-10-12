import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPostBySlug } from "@/data/blogData";
import { ContentText } from "@/components/ContentText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://miami-moving.com/blog/${post.slug}`;

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 pb-14 md:pt-36 md:pb-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground text-sm font-medium mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-semibold mb-4">
                {post.category}
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-5">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-primary-foreground/70 text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishDate)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="section-padding bg-background">
          <div className="max-w-3xl mx-auto">
            {post.content.map((section) => (
              <div key={section.heading} className="mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                  {section.heading}
                </h2>
                <ContentText text={section.text} className="text-muted-foreground text-lg leading-relaxed" />
              </div>
            ))}
            {post.faqs && <div className="mt-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible>
                {post.faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-foreground">{faq.question}</AccordionTrigger>
                  <AccordionContent forceMount className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>)}
              </Accordion>
            </div>}
          </div>
        </article>

        {/* CTA */}
        <section className="px-4 md:px-8 pb-16">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-8 md:p-10 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-card-foreground mb-3">
              Planning your move?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get a free, no-obligation quote from Miami Moving — licensed, insured, and trusted across South Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+17865640471"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-coral-hover text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                (786) 564-0471
              </a>
              <Link
                to="/#quote"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {post.relatedLinks.length > 0 && (
          <section className="section-padding bg-muted/50">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-xl text-foreground mb-4">
                Related
              </h2>
              <ul className="space-y-2">
                {post.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-primary font-semibold hover:underline"
                    >
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
