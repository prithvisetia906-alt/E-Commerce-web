import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/storefront";
export const metadata: Metadata = { title: { default: "NOVA — Technology, thoughtfully chosen.", template: "%s — NOVA" }, description: "Premium consumer electronics, thoughtfully chosen.", openGraph: { title: "NOVA — Technology, thoughtfully chosen.", description: "Premium consumer electronics, thoughtfully chosen.", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Header/>{children}<Footer/></body></html> }
