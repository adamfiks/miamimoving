import { Fragment } from "react";
import { Link } from "react-router-dom";

/** Small, safe text format: paragraphs and crawlable local links, never raw HTML. */
export const InlineText = ({ text }: { text: string }) => {
  const parts = text.split(/(\[[^\]]+\]\(\/[^\s)]+\))/g);
  return <>{parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\((\/[^\s)]+)\)$/);
    return match ? <Link key={index} to={match[2]} className="text-primary font-medium hover:underline">{match[1]}</Link> : <Fragment key={index}>{part}</Fragment>;
  })}</>;
};

export const ContentText = ({ text, className }: { text: string; className: string }) => (
  <div className="space-y-4">{text.split("\n\n").map((paragraph, index) => <p key={index} className={className}><InlineText text={paragraph} /></p>)}</div>
);