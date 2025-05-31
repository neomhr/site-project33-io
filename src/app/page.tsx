import HeroSection from "@/components/HeroSection";
import fs from "fs";
import path from "path";
import { SiteConfig } from "@/types/site";

// Old SiteConfig interface removed

async function getSiteConfig(): Promise<SiteConfig> {
  const filePath = path.join(process.cwd(), "site-config.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  // Assuming siteconfig.json directly contains a SiteConfig object
  // If siteconfig.json contains a SiteDatabase, you'll need to adjust this
  // e.g., const db = JSON.parse(fileContents) as SiteDatabase;
  // const config = db.sites["yourSiteKey"]; // or however you select the specific site
  const config = JSON.parse(fileContents) as SiteConfig;
  return config;
}

export default async function HomePage() {
  const config = await getSiteConfig();

  if (!config) {
    return <p>Error loading site configuration.</p>;
  }

  return (
    <main>
      <HeroSection hero={config.hero} theme={config.theme} />
      {/* Other sections would go here */}
    </main>
  );
}
