import { z } from "zod";

export const collectionTypeSchema = z.enum([
  "bobbleheads",
  "magazines",
  "holotape_games",
  "plans",
  "recipes",
  "apparel",
  "weapons",
  "armor",
  "power_armor",
  "quests",
  "notes",
  "terminals"
]);

export const seedItemSchema = z.object({
  id: z.string().min(1),
  type: collectionTypeSchema,
  setId: z.string().min(1),
  subsetId: z.string().min(1).optional(),
  name: z.string().min(1),
  effect: z.string().optional(),
  formId: z.string().optional(),
  referenceId: z.string().optional(),
  source: z.string().optional(),
  externalMapUrl: z.string().url().optional(),
  tags: z.array(z.string()),
  sortOrder: z.number().int().nonnegative()
});

export const categorySeedSchema = z.object({
  seedVersion: z.string().min(1),
  category: z.object({
    id: collectionTypeSchema,
    name: z.string().min(1)
  }),
  sets: z.array(
    z.object({
      id: z.string().min(1),
      name: z.string().min(1),
      sortOrder: z.number().int().nonnegative()
    })
  ),
  items: z.array(seedItemSchema)
});

export type CategorySeed = z.infer<typeof categorySeedSchema>;
