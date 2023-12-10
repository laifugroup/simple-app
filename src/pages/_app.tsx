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
