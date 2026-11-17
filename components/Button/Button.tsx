"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import type { ComponentProps } from "react";

type ButtonProps = Omit<ComponentProps<typeof BaseButton>, "className"> & {
  className?: string;
};

export default function Button({ className, type = "button", ...props }: ButtonProps) {
  const styles = "inline-flex min-h-11 items-center rounded-md font-semibold disabled:cursor-not-allowed disabled:opacity-55";

  return <BaseButton {...props} type={type} className={[styles, className].filter(Boolean).join(" ")} />;
}
