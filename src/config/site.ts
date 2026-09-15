export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "BloxNote Wiki",
  shortName: "BloxNote",
  logoText: "BN",
  tagline: "Roblox Gaming Wiki & Guide Hub",
  description: "BloxNote Wiki provides game guides, gameplay tips, updates and community resources to help players understand mechanics, discover features and improve their experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://blox-note.wiki",
  gameUrl: "https://www.roblox.com/games/113832557150558/BloxNote",
  heroVideoId: "ezGsOkasvac",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
