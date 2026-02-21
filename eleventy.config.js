module.exports = function(eleventyConfig) {
  // Tell 11ty to copy these folders to the output exactly as they are
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/*.ico");
  eleventyConfig.addPassthroughCopy("src/*.svg");
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.webmanifest");
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addFilter("dateFilter", (dateObj) => {
  return new Intl.DateTimeFormat("pl-PL").format(dateObj);
});

// Category list collection
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