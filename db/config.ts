import { defineDb, defineTable, column } from 'astro:db';

const Product = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    category: column.text(),
    price: column.number(),
  },
  indexes: [
    { on: ["id", "name", "price"], unique: true },
  ],
});

// https://astro.build/db/config
export default defineDb({
  tables: { Product },
});
