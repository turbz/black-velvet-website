import React from "react";
import Layout from "../components/layout";
import Services from "../components/services/services";

import "./services.css";

export default function ServicesPage() {
  return (
    <Layout>
      <main className="Services-Page">
        <Services />
      </main>
    </Layout>
  );
}
