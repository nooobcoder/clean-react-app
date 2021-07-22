## Default package manager: Yarn (light)
A very clean React App starter template by [Ankur Paul](https://github.com/nooobcoder)

![profile-avatar](https://avatars.githubusercontent.com/u/50350828?s=400&u=82f5ebc3cbedef0c5ca3c59086cf0f38c45dedbc&v=4)

---

### ESLint and Prettier configuration idea taken from

[ESLint, Prettier Config for React - Medium](https://brygrill.medium.com/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97)

---
## Prettify on pre-comit

You can easily add a **pre-commit** hook to your project using [**_husky_**](https://www.npmjs.com/package/husky) npm module, but there is another module that makes it even easier to lint your staged files before committing which is [**_lint-staged_**](https://www.npmjs.com/package/lint-staged).

**Please add the following devDependencies using yarn or npm**
`yarn add -D  lint-staged husky`

Then add to your  **_package.json_**  file:

      "husky": {
        "hooks": {
          "pre-commit": "lint-staged"
        }
      },
      "lint-staged": {
        "src/**/*.{js,jsx}": [
          "eslint",
          "pretty-quick — staged",
          "git add"
        ]
      }

---