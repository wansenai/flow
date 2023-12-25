// @ts-ignore
import { defineApplicationConfig } from '@vben/vite-config';

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        'echarts/core',
        'echarts/charts',
        'echarts/components',
        'echarts/renderers',
        'qrcode',
        '@iconify/iconify',
        'ant-design-vue/es/locale/zh_CN',
        'ant-design-vue/es/locale/en_US',
      ],
    },
    server: {
      port: 3200,
      proxy: {
        '/': {
          target: 'http://localhost:8990',
          changeOrigin: true,
          ws: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
          // only https
        },
      },
    },
  },
});
