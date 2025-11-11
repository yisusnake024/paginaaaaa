import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import 'leaflet/dist/leaflet.css';

export const metadata: Metadata = {
	title: "CIEF",
	description: "CIEF",
	
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
