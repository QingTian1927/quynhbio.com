import { defineDb, defineTable, column } from 'astro:db';

// translations: { en: "translation string", ... }
// vi is not included as it is the default locale.
const ProductCategories = defineTable({
  columns: {
    category: column.text({ primaryKey: true }),
    translations: column.json({ optional: true }),
  },
  indexes: [
    { on: ["category"], unique: true },
  ],
})

// media: { thumbnail: { src: dataUrl, alt: "alt text" }, images: dataUrl[] }
// Both thumbnail.src and thumbnail.alt are required, images is optional.

const Product = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ unique: true }),
    description: column.text({ default: "No description provided." }),
    category: column.text({ references: () => ProductCategories.columns.category }),
    price: column.number(),
    media: column.json({ optional: true }),
  },
  indexes: [
    { on: ["id", "name", "price", "category"], unique: true },
  ],
});

// https://astro.build/db/config
export default defineDb({
  tables: { Product, ProductCategories },
});
