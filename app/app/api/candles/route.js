import { sql } from "@vercel/postgres";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";

  if (id != "") {
    const { rows } = await sql`SELECT * FROM candle WHERE Candle_id = ${id};`;

    return Response.json({ data: rows[0] });
  }
  const { rows } = await sql`SELECT Candle_id from candle`;

  return Response.json({ data: rows });
}

export async function POST(request) {
  const { id, name, price, quantity, scentCategory } = await request.json();

  await sql`UPDATE candle SET Candle_name = ${name}, Price = ${price}, Quantity_in_stock = ${quantity}, Scent_category = ${scentCategory} WHERE Candle_id = ${id};`;

  return Response.json({ message: "Success." });
}

const generateId = (name) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  const randomDigits = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return initials + randomDigits;
};

export async function PUT(request) {
  const { name, price, quantity, scentCategory, reorderThreshold, supplier } =
    await request.json();

  const id = generateId(name);

  await sql`INSERT INTO candle (Candle_id, Candle_name, Price, Quantity_in_stock, Scent_category, Reorder_threshold, Supplier_id) 
          VALUES (${id}, ${name}, ${price}, ${quantity}, ${scentCategory}, ${reorderThreshold}, ${supplier});`;

  return Response.json({ message: "Success." });
}

export async function DELETE(request) {
  const { id } = await request.json();

  await sql`DELETE FROM candle WHERE Candle_id = ${id};`;

  return Response.json({ message: "Success." });
}
