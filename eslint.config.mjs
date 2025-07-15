import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import {defineConfig} from "eslint-define-config";

export default defineConfig([
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
                ecmaFeatures: {jsx: true},
            },
        },
        plugins: {
            react: pluginReact,
        },
        rules: {
            // Вимикаємо вимогу імпорту React у JSX
            "react/react-in-jsx-scope": "off",
        },
    },
    // Базові рекомендації ESLint
    js.configs.recommended,

    // TypeScript підтримка
    tseslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,

    // React правила
    pluginReact.configs.recommended,
]);