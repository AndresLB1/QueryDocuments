/* INSERCIONES */

db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },

    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },

    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "X" },

    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },

    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "B" },

    { item: "frame", qty: 200, size: { h: 20, w: 4.5, uom: "cm" }, status: "F" },

    { item: "map", qty: 2, size: { h: 60, w: 22.3, uom: "m" }, status: "F" },

    { item: "book", qty: 300, size: { h: 10, w: 24, uom: "cm" }, status: "X" },

    { item: "album", qty: 12, size: { h: 13, w: 40, uom: "m" }, status: "X" },

    { item: "laptop", qty: 0, size: { h: 25.3, w: 15.25, uom: "cm" }, status: "B" },

    { item: "tile", qty: 60, size: { h: 0.7, w: 3, uom: "m" }, status: "L" },
 ]);