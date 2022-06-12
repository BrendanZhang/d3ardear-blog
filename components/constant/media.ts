import { CSSProperties } from "@mui/styled-engine";

interface ISizes {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
}
const sizes: ISizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const media = (device: string): string => {
  return `@media(min-width: ${sizes[device as keyof ISizes]})`;
};
