import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from "weapp-tailwindcss/vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    uvwt({
      rem2rpx: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
})
