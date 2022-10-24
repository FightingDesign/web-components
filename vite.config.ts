import { resolve } from 'path'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    server: {
      port: 1024
    },
    build: {
      target: 'modules',
      minify: true,
      emptyOutDir: false,
      outDir: resolve(__dirname, './dist'),
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es'],
        fileName: () => 'index.js'
      },
      rollupOptions: {
        output: {
          preserveModules: true
        }
      }
    }
  } as UserConfigExport
}
