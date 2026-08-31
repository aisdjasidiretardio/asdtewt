import { nitro } from "nitro/vite";
import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vinext(), nitro()],
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
});