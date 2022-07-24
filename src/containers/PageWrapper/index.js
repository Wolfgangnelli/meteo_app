import React from "react";
import { Container } from "react-bootstrap";

export default function PageWrapper({ pageProps, children, className }) {
  return (
    <Container fluid className={className}>
      {children}
    </Container>
  );
}
