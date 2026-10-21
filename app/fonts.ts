import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from "next/font/google";

export const plexSans = IBM_Plex_Sans({ variable: "--font-plex", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const plexArabic = IBM_Plex_Sans_Arabic({ variable: "--font-plex-ar", subsets: ["arabic"], weight: ["400", "500", "600", "700"] });
export const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500", "600"] });

export const fontVariables = `${plexSans.variable} ${plexArabic.variable} ${plexMono.variable}`;

/** Runs before paint so the saved/system theme applies without a flash. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('theme')||'system';var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})()`;
