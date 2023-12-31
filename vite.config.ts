import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import path from 'path'

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

export default defineConfig({
  plugins: [topLevelAwait(), wasm(), react()],
  css: {
    modules: {
      hashPrefix: 'invosiv'
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      assets: resolveSrc('src/assets'),
      '@': path.resolve(__dirname, './src')
    }
  },

  worker: {
    format: 'es',
    plugins: [wasm()]
  },

  optimizeDeps: {
    // This is necessary because otherwise `vite dev` includes two separate
    // versions of the JS wrapper. This causes problems because the JS
    // wrapper has a module level variable to track JS side heap
    // allocations, and initializing this twice causes horrible breakage
    exclude: [
      // "@automerge/automerge-wasm",
      '@automerge/automerge-wasm/bundler/bindgen_bg.wasm',
      '@syntect/wasm'
    ]
  }
})
