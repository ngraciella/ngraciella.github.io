import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig, type PluginOption } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [react()];

  if (mode === "development") {
    // Cast because the plugin’s type comes from its own Vite dependency
    plugins.push(screenGraphPlugin() as unknown as PluginOption);
  }

  return {
    plugins,
    publicDir: "./static",
    base: "/",
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
  };
});
