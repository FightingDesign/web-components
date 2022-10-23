import { resolve } from 'path'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    build: {
      target: 'modules',
      // minify: true,
      emptyOutDir: false,
      outDir: resolve(__dirname, './dist'),
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'FightingWeb'
      },
      rollupOptions: {
        output: [
          {
            format: 'umd',
            exports: 'named',
            sourcemap: false,
            dir: 'dist/dist',
            entryFileNames: 'index.umd.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            namespaceToStringTag: true,
            manualChunks: undefined,
            inlineDynamicImports: false,
          },
          {
            format: 'es', // 打包模式 https://rollupjs.org/guide/en/#outputformat
            exports: 'named', // 导出模式 https://rollupjs.org/guide/en/#outputexports
            dir: 'dist/es', // 输出路径 https://rollupjs.org/guide/en/#outputdir
            sourcemap: false, // https://rollupjs.org/guide/en/#outputsourcemap
            entryFileNames: 'index.js', // 输出后的文件名 https://rollupjs.org/guide/en/#outputentryfilenames
            chunkFileNames: '[name].js', // 输出的 chunk文件名 https://rollupjs.org/guide/en/#outputchunkfilenames
            assetFileNames: '[name].[ext]', // 输出资产文件名 https://rollupjs.org/guide/en/#outputassetfilenames
            namespaceToStringTag: true, // https://rollupjs.org/guide/en/#outputnamespacetostringtag
            inlineDynamicImports: false, // https://rollupjs.org/guide/en/#outputinlinedynamicimports
            manualChunks: undefined,
            preserveModules: true // https://rollupjs.org/guide/en/#outputpreservemodules
          }
        ]
      }
    }
  } as UserConfigExport
}
