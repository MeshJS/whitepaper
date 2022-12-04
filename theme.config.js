export default {
  github: 'https://meshsdk.dev',
  titleSuffix: ' – Mesh Whitepaper',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        The Mesh Whitepaper
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        1 January 2023
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="The Mesh Whitepaper" />
      <meta
        name="og:description"
        content="Seamless blockchain integration. Web3 provision for businesses and creators"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="./public/mesh.png" />
      <meta name="twitter:site:domain" content="whitepaper.meshsdk.dev" />
      <meta name="twitter:url" content="https://twitter.com/meshsdk" />
      <meta name="og:title" content="The Mesh Whitepaper" />
      <meta name="og:image" content="./public/mesh.png" />
      <meta
        name="apple-mobile-web-app-title"
        content="The Mesh Whitepaper"
      />
      <meta name="msapplication-TileImage" content="/favicon-32x32.png" />
      <link rel="icon" type="image/x-icon" href="/favicon-32x32.png"></link>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  defaultMenuCollapsed: false,
  darkMode: true,
  footerEditLink: false,
  footerText: (
    <>Public Version 1.0 | {new Date().getFullYear()} © Mesh.</>
  ),
}
