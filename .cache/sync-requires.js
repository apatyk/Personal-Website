const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-page-js": hot(preferDefault(require("/Users/amp/Documents/Personal Website/Personal-Website/src/templates/index-page.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/amp/Documents/Personal Website/Personal-Website/.cache/dev-404-page.js")))
}

