# tw-literals

Tailwindcss Class Utility

## Install

```bash
# install with npm
npm install tw-literals

# install with yarn
yarn add tw-literals

# install with pnpm
pnpm add tw-literals
```

## Example

```javascript
import tw from "tw-literals";

const classes = tw`border border-red-50 bg-red-50`;
// output "border border-red-50 bg-red-50"

const classes = tw`
border
border-red-50
bg-red-50
`;
// output "border border-red-50 bg-red-50"
```

## VSCode Setup

```json
// file .vscode/settings.json
{
  "tailwindCSS.experimental.classRegex": [["tw`([^`]*)"]]
}
```

## Prettier Setup

with prettier-plugin-tailwindcss

```json
// file .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindAttributes": [],
  "tailwindFunctions": ["tw"],
  "tailwindPreserveWhitespace": true
}
```
