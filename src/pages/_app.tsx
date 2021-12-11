import { useEffect } from 'react';
import type { AppProps /* AppContext */ } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { globalCSSReset, globalStyles } from '~/stitches.config';
import { analytics, GA_TRACKING_ID } from '~/utils/analytics';

const googleAnalytics = (
  <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />

    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
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
      {googleAnalytics}

      <Component {...pageProps} />
    </>
  );
}
