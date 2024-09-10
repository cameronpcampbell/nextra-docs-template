const withNextra = require("nextra")({ theme: "nextra-theme-docs", themeConfig: "./theme.config.tsx" })
module.exports = withNextra({ output: "export", distDir: "./build", basePath: "/ignite_docs", images: { loader: "akamai", path: "" } })
