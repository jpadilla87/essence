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
