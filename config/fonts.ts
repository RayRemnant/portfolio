import { Montserrat as FontMono, Sen as FontSans } from "next/font/google";

export const fontSans = FontSans({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-sans",
});

export const fontMono = FontMono({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-mono",
});
