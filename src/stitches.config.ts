import type * as Stitches from '@stitches/react';
import { createStitches, CSS as StitchesCSS } from '@stitches/react';

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
  theme: {
    colors: {
      BrandGreen: 'hsla(175,22%,55%,1)',
      BrandYellow: 'hsla(50,100%,50%,1)',
      CapsuleBlue500: 'hsla(211, 76%, 24%, 1)',
      CapsuleBlue900: 'hsla(215, 53%, 23%, 1)',
      CapsuleGray100: 'hsla(210,8%,80%,1)',
      CapsuleGray300: 'hsla(218,11%,61%,1)',
      CapsuleGray500: 'hsla(212,8%,47%,1)',
      CapsuleGreen000: 'hsla(180,23%,95%,1)',
      CapsuleGreen100: 'hsla(171,25%,90%,1)',
      CapsuleGreen500: 'hsla(175,23%,67%,1)',
      CapsuleGreen600: 'hsla(172,100%,26%,1)',
      CapsuleGreen900: 'hsla(180,23%,95%,1)',
      CapsuleRed500: 'hsla(8,86%,56%,1)',
      CapsuleRed600: 'hsla(8,93%,47%,1)',
      CapsuleRed800: 'hsla(8,100%,37%,1)',
      CapsuleWhite000: 'hsla(0,0%,100%,1)',
      Transparent: 'hsla(0,0%,0%,0.001)',
    },
    space: {
      // used for margins + paddings + grid gaps
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      24: '24px',
      32: '32px',
      48: '48px',
      64: '64px',
      96: '96px',
      128: '128px',
    },
    fontSizes: {
      12: '12px',
      13: '13px',
      15: '15px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      36: '36px',
      48: '48px',
      60: '60px',
      84: '84px',
    },
    fontWeights: {
      normal: 400,
      bold: 700,
    },
    fonts: {
      circular: 'Circular-Pro, Helvetica, Arial, sans-serif',
      mercury: 'MercuryTextG4, Georgia, Times New Roman, serif',
    },
    lineHeights: {
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      44: '44px',
      72: '72px',
      92: '92px',
    },
    radii: {
      circle: '50%',
      pill: '999px',
      small: '3px',
    },
  },
  utils: {
    // prettier-ignore
    m: (value: Stitches.PropertyValue<"margin">) => ({ marginLeft: value, marginRight: value, marginTop: value, marginBottom: value, }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({ marginLeft: value, marginRight: value }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({ marginTop: value, marginBottom: value }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({ marginTop: value }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({ marginRight: value }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({ marginBottom: value }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({ marginLeft: value }),
    // prettier-ignore
    p: (value: Stitches.PropertyValue<"padding">) => ({ paddingLeft: value, paddingRight: value, paddingTop: value, paddingBottom: value, }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({ paddingTop: value, paddingBottom: value }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({ paddingTop: value }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({ paddingRight: value }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({ paddingBottom: value }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({ paddingLeft: value }),
    w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),
    minW: (value: Stitches.PropertyValue<'minWidth'>) => ({ minWidth: value }),
    maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
    h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
    minH: (value: Stitches.PropertyValue<'minHeight'>) => ({ minHeight: value }),
    maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({ maxHeight: value }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({ borderRadius: value }),
  },
  media: {
    aboveXXL: '(min-width: 1280px)',
    belowXXL: '(max-width: 1279px)',
    aboveXL: '(min-width: 1200px)',
    belowXL: '(max-width: 1199px)',
    aboveLarge: '(min-width: 992px)',
    belowLarge: '(max-width: 991px)',
    aboveMedium: '(min-width: 768px)',
    belowMedium: '(max-width: 767px)',
    aboveSmall: '(min-width: 576px)',
    belowSmall: '(max-width: 575px)',
  },
});

export type ThemeSafeCSS = StitchesCSS<typeof config>;

export const globalCSSReset = globalCss({
  html: {
    lineHeight: 1.15,
    '-webkit-text-size-adjust': '100%',
  },
  body: {
    margin: 0,
  },
  main: {
    display: 'block',
  },
  h1: {
    fontSize: '2em',
    margin: '0.67em 0',
  },
  hr: {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },
  pre: {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },
  a: {
    backgroundColor: 'transparent',
  },
  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
  },
  'b, strong': {
    fontWeight: 'bolder',
  },
  'code, kbd, samp': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },
  small: {
    fontSize: '80%',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  img: {
    borderStyle: 'none',
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0,
  },
  'button, input': {
    overflow: 'visible',
  },
  'button, select': {
    textTransform: 'none',
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    '-webkit-appearance': 'button',
  },
  'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner':
    {
      borderStyle: 'none',
      padding: 0,
    },
  'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring':
    {
      outline: '1px dotted ButtonText',
    },
  fieldset: {
    padding: '0.35em 0.75em 0.625em',
  },
  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: 0,
    whiteSpace: 'normal',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  textarea: {
    overflow: 'auto',
  },
  '[type="checkbox"], [type="radio"]': {
    boxSizing: 'border-box',
    padding: 0,
  },
  '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
    height: 'auto',
  },
  '[type="search"]': {
    '-webkit-appearance': 'textfield',
    outlineOffset: -2,
  },
  '[type="search"]::-webkit-search-decoration': {
    '-webkit-appearance': 'none',
  },
  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit',
  },
  details: {
    display: 'block',
  },
  summary: {
    display: 'list-item',
  },
  template: {
    display: 'none',
  },
  '[hidden]': {
    display: 'none',
  },
});

export const globalStyles = globalCss({
  '#__next': {
    height: '100%',
  },
  html: {
    height: '100%',
  },
  body: {
    backgroundColor: '$background',
    height: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
});
