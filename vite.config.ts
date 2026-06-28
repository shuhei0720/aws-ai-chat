/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Vitestの設定を追加
  test: {
    globals: true, // describe, it, expect などをグローバルで使用可能に
    environment: "jsdom", // React コンポーネントのテストのため
    // setupFiles: "./src/setupTests.ts", // テスト実行前のセットアップファイル（オプション）
  },
});
