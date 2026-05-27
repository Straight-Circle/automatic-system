export type CollectionType =
  | "bobbleheads"
  | "magazines"
  | "holotape_games"
  | "plans"
  | "recipes"
  | "apparel"
  | "weapons"
  | "armor"
  | "power_armor"
  | "quests"
  | "notes"
  | "terminals";

export type TrackerItem = {
  id: string;
  type: CollectionType;
  setId: string;
  subsetId?: string;
  name: string;
  effect?: string;
  formId?: string;
  referenceId?: string;
  source?: string;
  externalMapUrl?: string;
  tags: string[];
  sortOrder: number;
  seedVersion: string;
};

export type UserItemState = {
  itemId: string;
  collected: boolean;
  favorite: boolean;
  note?: string;
  collectedAt?: string;
  updatedAt: string;
};
