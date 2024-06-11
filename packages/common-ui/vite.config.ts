import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, "index.ts"),
            name: "common-ui",
            fileName: "common-ui",
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "React-dom",
                },
            },
        },
    },
});