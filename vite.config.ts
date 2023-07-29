/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        })
    ],
    server: {
        open: true
    },
    test: {
        globals: true,
        environment: "happy-dom",
        setupFiles: './src/test/setup.ts'
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/lib/index.ts"),
            name: "react-theme-eclipse",
            fileName: "react-theme-eclipse",

        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDom"
                }
            }
        },
    }
})