import bobbleheadsSeed from "../seeds/bobbleheads.v1.json";
import magazinesSeed from "../seeds/magazines.v1.json";
import holotapeGamesSeed from "../seeds/holotape_games.v1.json";
import { db } from "../../db/dexie_db";
import { categorySeedSchema, type CategorySeed } from "../../validation/zod/seed_schema";

const categorySeeds = [bobbleheadsSeed, magazinesSeed, holotapeGamesSeed] as const;

export async function loadSeedData(): Promise<void> {
  const validatedSeeds = categorySeeds.map((seed) => categorySeedSchema.parse(seed)) as CategorySeed[];

  await db.transaction("rw", [db.categories, db.sets, db.items], async () => {
    for (const seed of validatedSeeds) {
      await db.categories.put({ id: seed.category.id, name: seed.category.name, seedVersion: seed.seedVersion });
      await db.sets.bulkPut(seed.sets.map((set) => ({ ...set, categoryId: seed.category.id })));
      await db.items.bulkPut(seed.items.map((item) => ({ ...item, seedVersion: seed.seedVersion })));
    }
  });
}
