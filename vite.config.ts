import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { VueRouterExports } from 'unplugin-vue-router'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    VueRouter({
      routeBlockLang: 'yaml',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        {
          'vue/macros': ['$ref'],
          'vue': ['watchEffect', 'onMounted'],
          '@vueuse/core': ['useDark', 'useToggle', 'useStorage'],
          'vue-router/auto': VueRouterExports,
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],
})
