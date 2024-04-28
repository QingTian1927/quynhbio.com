import { optional } from 'astro/zod';
import { defineDb, defineTable, column } from 'astro:db';

const Product = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ unique: true }),
    description: column.text({ default: "No description provided" }),
    category: column.text(),
    price: column.number(),
    media: column.json({ optional: true }),
  },
  indexes: [
    { on: ["id", "name", "price"], unique: true },
  ],
});

// https://astro.build/db/config
export default defineDb({
  tables: { Product },
});
