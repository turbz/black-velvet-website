import React from "react";
import Contacts from "../components/contacts/contacts";
import Layout from "../components/layout";

import "./contact.css";

export default function ContactPage() {
  return (
    <Layout>
      <main className="Contact-Page">
        <Contacts />
      </main>
    </Layout>
  );
}
