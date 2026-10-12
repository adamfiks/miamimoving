import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";

const BLOG_DESCRIPTION =
  "Moving tips, cost guides, and neighborhood insights for anyone moving within South Florida — from the team at Miami Moving.";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

const BlogIndex = () => {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/" className="inline-flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground text-sm font-medium mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-4">
                Moving Tips & Resources
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-3xl leading-relaxed">
                {BLOG_DESCRIPTION}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block h-full bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                      {post.category}
                    </span>
                    <h2 className="font-display font-bold text-xl text-card-foreground mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.publishDate)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogIndex;
