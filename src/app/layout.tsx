import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
const display=Playfair_Display({variable:"--font-display",subsets:["latin"],display:"swap"});
const body=Plus_Jakarta_Sans({variable:"--font-body",subsets:["latin"],display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://scholarshassan.com"),title:"Scholars' School, Hassan | ICSE School",description:"Scholars' School, Hassan — Montessori to High School, affiliated to CISCE, New Delhi (KA495).",icons:{icon:"https://scholarshassan.com/img/02%20%281%29.png"},openGraph:{title:"Scholars' School, Hassan",description:"Infinite potential.",images:["https://scholarshassan.com/img/home-welcome.jpg"]}};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#002147"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>}
