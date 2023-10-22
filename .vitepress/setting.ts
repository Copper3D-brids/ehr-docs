// typing --------------------------------------------------------------------

export interface SocialLink {
  icon: SocialLinkIcon;
  link: string;
}

export type SocialLinkIcon =
  | "discord"
  | "facebook"
  | "github"
  | "instagram"
  | "linkedin"
  | "mastodon"
  | "slack"
  | "twitter"
  | "youtube"
  | { svg: string };

// setting --------------------------------------------------------------------

export const github = "https://github.com/Copper3D-brids/ehr-docs";

export function createSocialLinks(): SocialLink[] {
  return [{ icon: "github", link: github }];
}

export function createAlgolia() {
  return {
    apiKey: "",
    indexName: "ehr-docs",
    appId: "BH4D9OD16A",
    placeholder: "Keywords for search docs",
    translations: {
      button: {
        buttonText: "Search",
      },
    },
  };
}
