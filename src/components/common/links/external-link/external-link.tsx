import React from "react";

type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

export default function ExternalLink(props: Props) {
  const { href, className, children } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children ?? href}
    </a>
  );
}
