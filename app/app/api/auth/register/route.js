import { sql } from "@vercel/postgres";

export async function POST(request) {
  const { firstName, lastName, email, password } = await request.json();

  const { rows } = await sql`SELECT * FROM customer WHERE Customer_email = ${email}`;

  if (rows.length > 0) {
    return Response.json({ created: false, message: "email already exists" });
  }

  await sql`INSERT INTO customer (Customer_firstname, Customer_lastname, Customer_password, Customer_email) VALUES (${firstName}, ${lastName}, ${password}, ${email});`;

  return Response.json({ created: true, message: "success" });
}