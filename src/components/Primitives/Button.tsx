import { ComponentProps } from "react";
import { styled } from "~/stitches.config";

export const Button = styled('button', { m: 0, boxSizing: "border-box" })

export interface ButtonProps extends ComponentProps<typeof Button> {}
