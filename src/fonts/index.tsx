import localFont from "next/font/local";
import { Poppins as GooglePoppins } from "next/font/google";

export const Pretendard = localFont({
  src: "PretendardGOVVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const Poppins = GooglePoppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
