const withNextra = require("nextra")({ theme: "nextra-theme-docs", themeConfig: "./theme.config.tsx" })
module.exports = withNextra({ output: "export", distDir: "./build", basePath: "", images: { loader: "akamai", path: "", unoptimized: true }, })
