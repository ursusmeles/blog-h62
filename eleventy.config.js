import pluginRss from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import pluginToc from "eleventy-plugin-toc";

export default async function(eleventyConfig) {

  const mdLib = markdownIt({ html: true }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
    level: [2, 3, 4] // Only create anchors for these levels
  });
  eleventyConfig.setLibrary("md", mdLib);

  // 2. Add the ToC Plugin
  eleventyConfig.addPlugin(pluginToc, {
    tags: ['h2', 'h3', 'h4'],
    wrapper: 'div',
    wrapperClass: 'toc stack',
    ul: true // Generates nested <ul>
  });

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/*.ico");
  eleventyConfig.addPassthroughCopy("src/*.svg");
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.webmanifest");
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    return new Intl.DateTimeFormat("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(dateObj);
  });

  eleventyConfig.addFilter("readingTime", (text) => {
  const wordsPerMinute = 222;
  const cleanText = text.replace(/<[^>]*>/g, "");
  const wordCount = cleanText.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  return readingTime;
});

eleventyConfig.addFilter("injectToc", (content, tocHtml) => {
  if (!tocHtml) return content;
  
  const paragraphEnd = "</p>";
  const index = content.indexOf(paragraphEnd);
  
  if (index === -1) return tocHtml + content; // Fallback: put at top
  
  const insertionPoint = index + paragraphEnd.length;
  return content.slice(0, insertionPoint) + tocHtml + content.slice(insertionPoint);
});

  eleventyConfig.addCollection("categoryList", function(collectionApi) {
    const posts = collectionApi.getFilteredByTag("posts");
    let categorySet = new Set();
    
    posts.forEach(post => {
      if (post.data.category) {
        categorySet.add(post.data.category);
      }
    });
    
    return Array.from(categorySet).sort();
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};