
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/longluong/Web/luongkimlong/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/longluong/Web/luongkimlong/src/pages/404.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/longluong/Web/luongkimlong/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-category-js": preferDefault(require("/Users/longluong/Web/luongkimlong/src/templates/blog-category.js")),
  "component---src-templates-blog-list-js": preferDefault(require("/Users/longluong/Web/luongkimlong/src/templates/blog-list.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/longluong/Web/luongkimlong/src/templates/blog-post.js")),
  "component---src-templates-blog-tag-js": preferDefault(require("/Users/longluong/Web/luongkimlong/src/templates/blog-tag.js"))
}

