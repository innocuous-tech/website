import type { AppProps, AppContext } from 'next/app';

/**
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
