import { defineConfig } from "vite";
import * as path from "node:path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "tw-literals",
      fileName: "index",
      formats: ["es", "umd"]
    },
  },
});
