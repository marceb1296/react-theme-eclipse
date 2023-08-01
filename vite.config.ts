/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import checker from "vite-plugin-checker";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true
        }),
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