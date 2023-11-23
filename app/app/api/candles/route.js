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