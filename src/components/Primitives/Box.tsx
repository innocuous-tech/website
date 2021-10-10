import { ComponentProps } from "react";
import { styled } from "~/stitches.config";

export const Box = styled("div", { m: 0, boxSizing: "border-box" });

export interface BoxProps extends ComponentProps<typeof Box> {}
