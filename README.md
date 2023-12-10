# nextjs & nextui

## 创建项目
````
    PS D:\workspace-nextjs> npx create-next-app@latest
    √ What is your project named? ... simple-app
    √ Would you like to use TypeScript? ...  / Yes
    √ Would you like to use ESLint? ...  / Yes
    √ Would you like to use Tailwind CSS? ...  / Yes
    √ Would you like to use `src/` directory? ...  / Yes
    √ Would you like to use App Router? (recommended) ... No 
    √ Would you like to customize the default import alias (@/*)? ...  / Yes
    √ What import alias would you like configured? ... @/*
    Using npm.
````

## 新增nextui  不要使用pnpm
````
PS D:\workspace-nextjs> cd .\simple-app\
PS D:\workspace-nextjs\simple-app> npm i @nextui-org/react framer-motion

````


### 配置 tailwind.config.ts
````
import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config

````
### 静态导出 unoptimized 必须关闭 (静态导出会使依赖服务端的功能无法使用)
````
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  output: 'export',//out
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'out',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
````
nginx配置

````
server {
  listen 80;
  server_name lh.bbbang.com;

  root D:/workspace-nextjs/simple-app/out;

  location / {
    try_files $uri $uri/ /index.html; 
  }

  error_page 404 /404.html;

  location = /404.html {
    internal;
  }
}

````

### _app.tsx
````
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Use at the root of our app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

````

## run app idnex.tsx
````
import { Button } from "@nextui-org/react";

<Button>Button Begin</Button>

````

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
