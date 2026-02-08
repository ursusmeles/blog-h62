module.exports = function(eleventyConfig) {
  // Tell 11ty to copy these folders to the output exactly as they are
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};