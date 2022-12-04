import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  // logo: <span>Mesh Whitepaper</span>,
  project: {
    link: "https://github.com/MeshJS/mesh",
  },
  chat: {
    link: "https://discord.gg/Z6AH9dahdH",
  },
  docsRepositoryBase: "https://github.com/MeshJS/mesh",
  editLink: {
    text: "",
  },
  faviconGlyph: "m",
  footer: {
    text: "Mesh - An open-source library for building applications on the Cardano blockchain.",
  },
  logo: (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <img src="/favicon-32x32.png" style={{ marginRight: "0.5rem" }} />{" "}
      <span>Mesh Whitepaper</span>
    </div>
  ),
};

export default config;
