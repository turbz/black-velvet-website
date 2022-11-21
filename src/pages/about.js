import React from "react";
import About from "../components/about/about";
import Layout from "../components/layout";

import "./about.css";

export default function AboutPage() {
  return (
    <Layout>
      <main className="About-Page">
        <About />
      </main>
    </Layout>
  );
}
