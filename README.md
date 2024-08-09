# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Tech Stack & Tools

 - **React**
	 - I love react so much
 - **Vite**
	 - Why Vite? Simply put, it’s fast and the go-to choice for React developers now. The official docs recommend switching to Vite over CRA, and it’s easy to see why!
 - **SASS**
	 - his is the future of CSS superset that simplifies development. By using variables, mixins, functions, and more, I’ve made my CSS reusable and more efficient.
 - **Typescript**
	 - Of course, it’s type-safe and a superset of JavaScript, which keeps me mindful of defining types and minimizes errors.
 - **Apex Chart**
	 - Easy to use, with a beautiful UI concept and smooth animations.
 - **GSAP**
	 - One of the best libraries for creating dynamic and beautiful animations.
 - **Lenis Scroll**
	 - I'm using it because Lenis makes the scrolling experience incredibly smooth.
 - **Vitest**
	 - Easy to use, just like Jest, with hardly any differences.
 - **SVGR**
	 - Allows me to import SVGs as React components.
