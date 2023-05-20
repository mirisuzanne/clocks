require('dotenv').config();

const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/_css': 'css' });

	eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc",
  });

	eleventyConfig.setLiquidOptions({jsTruthy: true});
  eleventyConfig.setQuietMode(true);

	return {
    dir: {
      input: "src",
			layouts: "_layouts"
    }
  }
};
