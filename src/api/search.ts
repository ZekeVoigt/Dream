// src/api/search.ts
import { Request, Response } from "express";
import payload from "payload";

const searchHandler = async (req: Request, res: Response) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }

  try {
    const products = await payload.find({
      collection: "products", // Adjust according to your collection name
      where: {
        or: [
          { title: { contains: query } },
          { description: { contains: query } },
          // Add more fields if necessary
        ],
      },
    });

    res.status(200).json(products);
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default searchHandler;
