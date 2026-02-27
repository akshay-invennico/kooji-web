"use client";

import React from "react";
import { LucideProps } from "lucide-react";
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface IconProps extends Omit<LucideProps, "size"> {
  component: React.FC<LucideProps>;
  size?: IconSize;
  className?: string;
}

const SIZE_MAP: Record<IconSize, number> = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 22,
  xl: 28,
};

const Icon: React.FC<IconProps> = ({
  component: LucideIcon,
  size = "md",
  className,
  ...rest
}) => {
  const px = SIZE_MAP[size];
  return <LucideIcon size={px} className={className} {...rest} />;
};

export default Icon;
