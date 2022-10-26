import { useEffect } from 'react';
import type { AppProps /* AppContext */ } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { darkTheme, globalCSSReset, globalStyles } from '~/stitches.config';
import { analytics, GA_TRACKING_ID } from '~/utils/analytics';
import '@christiankaindl/lyts/style.css';
import { ThemeProvider } from 'next-themes';

const googleAnalytics = (
  <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      strategy="worker"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />

    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${GA_TRACKING_ID}",{page_path:window.location.pathname});`,
      }}
    />
  </>
);

/**
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  globalCSSReset();
  globalStyles();

  useEffect(() => {
    router.events.on('routeChangeComplete', analytics.pageView);

    return () => {
      router.events.off('routeChangeComplete', analytics.pageView);
    };
  }, [router.events]);

  return (
    <>
      <Analytics />
      {googleAnalytics}

      <ThemeProvider
        disableTransitionOnChange={false}
        attribute="class"
        value={{ dark: darkTheme.className, light: 'light-theme' }}
        defaultTheme="system"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
