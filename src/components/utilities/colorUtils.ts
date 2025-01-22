import chroma from "chroma-js";

export const lighten = (color: string, amount: number) => chroma(color).brighten(amount).hex();
export const darken = (color: string, amount: number) => chroma(color).darken(amount).hex();
export const gradient = (color1: string, color2: string) =>
  `linear-gradient(90deg, ${color1}, ${color2})`;

// Example usage:
const primary = "#BC9A2D";
export const primaryLight = lighten(primary, 1);
export const primaryDark = darken(primary, 1);
export const primaryGradient = gradient(primaryLight, primaryDark);
