import React from "react";

export default function PageWrapper({ pageProps, children, className }) {
  return <div className={className}>{children}</div>;
}
