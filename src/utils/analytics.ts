export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * @description dev-only logging of gtag methods
 */
const log = ({ methodName, ...rest }: { methodName: string; [rest: string]: any }) => {
  if (typeof window !== 'undefined') {
    console.log(`${'gtag' in window ? '✅' : '❌'} Google Analytics`);
  }

  console.log(`gtag.${methodName}\n`, rest); // eslint-disable-line no-console
};

/**
 * @description Log a pageview with gtag
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
const pageView = (url: string) => {
  if (GA_TRACKING_ID && typeof window !== 'undefined') {
    window?.gtag?.('config', GA_TRACKING_ID, { page_path: url });
  } else {
    log({ methodName: 'pageview', url });
  }
};

interface DesiredGtagParams
  extends Pick<Required<Gtag.EventParams>, 'event_category' | 'event_label'>,
    Omit<Gtag.EventParams, 'event_category' | 'event_label'> {}

/**
 * @description Log an event with gtag
 * @example Typical event:
 *    Category: "Videos"
 *    Action: "Play"
 *    Label: "Baby's First Birthday"
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
const event = ({ action, parameters }: { action: string; parameters: DesiredGtagParams }) => {
  if (GA_TRACKING_ID && typeof window !== 'undefined') {
    window?.gtag?.('event', action, parameters);
  } else {
    log({
      methodName: 'event',
      action,
      parameters,
    });
  }
};

/**
 * @description Log a link click which takes users away from our site
 */
const outboundLinkEvent = ({
  label,
  outboundUrl,
}: {
  /**
   * The text of the external link that was clicked or a description of it.
   */
  label: string;

  /**
   * The actual URL of the external link being clicked
   */
  outboundUrl: string;
}) => {
  event({
    action: `To: ${label}`,
    parameters: {
      event_category: 'Outbound',
      event_label: `URL: ${outboundUrl}`,
    },
  });
};

// /**
//  * @description Log a modal view as if it were a gtag page view event
//  */
// const modalViewEvent = (modalName: string) => {
//   const url = `/modal/${snakeCase(modalName.toLowerCase())}`;
//   const isModalView = true;
//   pageView(url, isModalView);
// };

export const analytics = {
  log,
  pageView,
  event,
  outboundLinkEvent,
};
