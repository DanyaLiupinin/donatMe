import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components/index.tsx",
      "@pages": "/src/pages/index.tsx",
      "@features": "/src/features/index.tsx",
      "@hooks": "/src/hooks/index.tsx",
    },
  },
});
