// Source of truth: the live site (symbolsofwealth.studio) and its About page copy in Sanity.
// Keep this in step with the site. No pricing, ever.

export const studioProfile = {
  profile_version: "2.0.0",
  last_updated: "2026-09-30",
  name: "Symbols of Wealth Studio",
  trading_as: "SOW Studio",
  url: "https://symbolsofwealth.studio",
  contact_email: "hey@symbolsofwealth.studio",
  location: {
    base: "Southern France",
    country: "France",
    cities: ["Paris", "London", "Berlin"],
  },
  experience:
    "Fifteen years across sport, fashion, gaming and culture. Nike, adidas, On, Fortnite, Buzzman, Riot Games, Epic Games. We learned where it matters. Now it's our turn.",
  tagline: "Built by Culture",
  manifesto: "A symbol of wealth.\nIt's not what you think.\n\nIt's your son's eyes in the morning.\nThe song that makes him dance.\nThe memory you never saw coming.\n\nThe best campaigns do that.\nThey don't sell.\nThey push.\n\nTo go for a run at 6am.\nTo try the thing you never dared.\nTo feel capable of something bigger than yourself.\n\nThey stick somewhere.\nIn memory.\nIn culture.\nIn people.\nThat's why we do this.\nThat's why we're called\n\nSymbols of Wealth.\n\nBuilt by Culture",
  positioning: {
    one_line: "Every studio says the same brand-building bullshit. We'd rather just show you.",
    in_our_words: [
      "No synergy. No storytelling journey. Just the work.",
      "From idea to result. We handle it.",
      "A studio that picks up its own phone.",
      "Let's make something that doesn't sound like everyone else.",
    ],
  },
  services: {
    summary: "From idea to result. We handle it.",
    pillars: [
      {
        name: "Strategy",
        includes: ["Positioning", "Brand platform", "Launch", "Social strategy"],
      },
      {
        name: "Creation",
        includes: ["360 campaigns", "Art direction", "Content factory"],
      },
      {
        name: "Influence",
        includes: ["Casting", "Negotiation", "Follow-up", "Reporting"],
      },
      {
        name: "Media",
        includes: ["Social", "Posting", "Paid", "Performance"],
      },
    ],
    what_we_make: [
      "Social content — feeds that don't look like everyone else's",
      "UGC — without the casting-call theatre",
      "Kinetic typography — words that move because they should",
      "Cinematic brand film — the one piece people actually remember",
      "Full 360 campaigns — one idea, everywhere, no committee",
    ],
    sectors: ["Sport", "Fashion", "Gaming", "Culture"],
  },
  clients: [
    "Nike",
    "adidas",
    "Epic Games",
    "Riot Games",
    "On Running",
    "Mercedes",
    "Zalando",
    "Off-White",
    "Gucci",
    "Ballantine's",
    "NBA Essentials",
    "Buzzman",
  ],
  selected_work: [
    {
      project: "Bread&&Butter by Zalando",
      client: "Zalando",
      summary:
        "Festival campaign and full branding. Creative direction and rollout across all channels: digital, social, print and on-site.",
    },
    {
      project: "UNIFORIA",
      client: "adidas",
      summary:
        "Global launch campaign for the UNIFORIA football pack. Creative direction and rollout across all channels: digital, social, print and in-store.",
    },
    {
      project: "Predator Edge",
      client: "adidas",
      summary:
        "Global launch campaign for Predator Edge. Campaign idea, creative direction and rollout across all channels: digital, social, print and in-store.",
    },
    {
      project: "Fortnite OG",
      client: "Epic Games",
      summary: "Campaign launch for Fortnite OG. Concept, strategy and 360 rollout.",
    },
  ],
  how_to_engage:
    "A brief. An idea. A feeling. Let's talk. Email hey@symbolsofwealth.studio or visit symbolsofwealth.studio.",
} as const;

export type StudioProfile = typeof studioProfile;

export const contactInfo = {
  studio_name: "Symbols of Wealth Studio",
  email: "hey@symbolsofwealth.studio",
  website: "https://symbolsofwealth.studio",
  location: "Southern France",
  cities: ["Paris", "London", "Berlin"],
  how_to_engage: "A brief. An idea. A feeling. Let's talk. Email hey@symbolsofwealth.studio.",
} as const;

export type ContactInfo = typeof contactInfo;
