import Dexie, { type Table } from "dexie";
import type { TrackerItem, UserItemState } from "../features/catalog/catalog.types";
import type { CategorySeed } from "../validation/zod/seed_schema";

type AppSetting = { key: string; value: string | boolean };
type ActivityEvent = { id: string; eventType: string; itemId: string; timestamp: string };

type SeedSet = CategorySeed["sets"][number] & { categoryId: string };
type CategoryRecord = { id: string; name: string; seedVersion: string };

export class AppalachiaTrackerDb extends Dexie {
  categories!: Table<CategoryRecord, string>;
  sets!: Table<SeedSet, string>;
  items!: Table<TrackerItem, string>;
  progress!: Table<UserItemState, string>;
  settings!: Table<AppSetting, string>;
  activity!: Table<ActivityEvent, string>;

  constructor() {
    super("appalachia_tracker_db");
    this.version(1).stores({
      categories: "id",
      sets: "id, categoryId, sortOrder",
      items: "id, type, setId, name, sortOrder",
      progress: "itemId, collected, favorite, updatedAt",
      settings: "key",
      activity: "id, eventType, itemId, timestamp"
    });
  }
}

export const db = new AppalachiaTrackerDb();
