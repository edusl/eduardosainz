import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";

export default defineConfig({
	base: '/',
	css: {
		postcss: {
			plugins: [postcssNesting],
		},
	},
});
