import { visualizer } from 'rollup-plugin-visualizer';

export default {
  optimizeDeps: {
    exclude: ['candygraph']
  },
  build: {
    rollupOptions: {
      plugins: [visualizer()]
    }
  }
}