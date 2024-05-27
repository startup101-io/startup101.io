import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePlugin as remix } from "@remix-run/dev";

export default defineConfig({
    plugins: [react(), remix()],
    server: {
        port: 8000
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`,
            },
        },
    },
})
