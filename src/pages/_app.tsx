import type { AppProps /* AppContext */ } from 'next/app';
import { globalCSSReset, globalStyles } from '~/stitches.config';

/**
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
export default function App({ Component, pageProps }: AppProps) {
  globalCSSReset();
  globalStyles();

  return <Component {...pageProps} />;
}
