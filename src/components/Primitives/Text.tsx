import { ComponentProps } from "react";
import { styled } from "~/stitches.config";

export const Text = styled("span", {
  m: 0,
  boxSizing: "border-box",
  color: "$CapsuleGray500",
  fontFamily: '$circular',

  variants: {
    variant: {
      body: {
        fontSize: "$16",
        fontWeight: "$noraml",
        lineHeight: "$20",
      },
      small: {
        fontSize: "$12",
        fontWeight: "$normal",
        lineHeight: "$16",
      },
      overline: {
        fontSize: "$12",
        fontWeight: "$normal",
        lineHeight: "$20",
        letterSpacing: "1px",
        textTransform: "uppercase",
      },
      callout: {
        fontSize: "$15",
        fontWeight: "$normal",
        lineHeight: "$20",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontFamily: "$mercury",
      },
      calloutSmall: {
        fontSize: "$13",
        fontWeight: "$normal",
        lineHeight: "$20",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontFamily: "$mercury",
      },
      heading1: {
        fontSize: "$28",
        fontWeight: "$bold",
        lineHeight: "$36",
      },
      heading2: {
        fontSize: "$24",
        fontWeight: "$bold",
        lineHeight: "$28",
      },
      heading3: {
        fontSize: "$20",
        fontWeight: "$bold",
        lineHeight: "$24",
      },
      heading4: {
        fontSize: "$16",
        fontWeight: "$bold",
        lineHeight: "$20",
      },
      displayXl: {
        fontSize: "$36",
        fontWeight: "$bold",
        lineHeight: "$44",
      },
      displayXxl: {
        fontSize: "$60",
        fontWeight: "$bold",
        lineHeight: "$72",
      },
      displayXxxl: {
        fontSize: "$84",
        fontWeight: "$bold",
        lineHeight: "$92",
      },
    },
  },

  defaultVariants: {
    variant: "body",
  },
});

export type TextProps = ComponentProps<typeof Text>;
