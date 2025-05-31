import { SiteConfig } from './site'; // Assuming site.ts is in the same directory

export interface HeroSectionProps {
    hero?: SiteConfig['hero'];
    theme?: SiteConfig['theme'];
}