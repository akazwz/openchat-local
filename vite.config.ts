import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		reactRouter({
			ssr: false,
			prerender: true,
		}),
		tsconfigPaths(),
	],
	build: {
		target: "esnext",
	},
});
