import { sql } from "@vercel/postgres";

export async function POST(request) {
  const { id, quantity } = await request.json();

  await sql`UPDATE candle SET Quantity_in_stock = Quantity_in_stock - ${quantity} WHERE Candle_id = ${id};`;

  return Response.json({ message: "success" });
}
