module.exports = function(eleventyConfig) {
  // Tell 11ty to copy these folders to the output exactly as they are
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/*.ico");
  eleventyConfig.addPassthroughCopy("src/*.svg");
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.webmanifest");

  eleventyConfig.addFilter("dateFilter", (dateObj) => {
  return new Intl.DateTimeFormat("pl-PL").format(dateObj);
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