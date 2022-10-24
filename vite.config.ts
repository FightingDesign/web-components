import { resolve } from 'path'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    build: {
      target: 'modules',
      minify: true,
      emptyOutDir: false,
      outDir: resolve(__dirname, './dist'),
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'FightingWeb'
      },
      rollupOptions: {
        output: {
          format: 'umd',
          exports: 'named',
          sourcemap: false,
          entryFileNames: 'index.umd.js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          namespaceToStringTag: true,
          manualChunks: undefined,
          inlineDynamicImports: false
        }
      }
    }
  } as UserConfigExport
}
