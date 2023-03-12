import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

const resolveFixup = {
  name: "resolve-fixup",
  setup(build) {
    build.onResolve({ filter: /react-virtualized/ }, async (args) => {
      return {
        path: path.resolve("./node_modules/react-virtualized/dist/umd/react-virtualized.js"),
      };
    });
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  define: {
    global: "globalThis",
  },
  server: {
    // https: true,
    port: 3000,
  },
  resolve: {
    alias: {
      path: "path-browserify",
      stream: "stream-browserify",
      crypto: "crypto-browserify",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        resolveFixup,
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
});
