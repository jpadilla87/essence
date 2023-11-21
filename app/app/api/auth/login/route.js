import { sql } from "@vercel/postgres";

export async function POST(request) {
  const { email, password } = await request.json();

  const { rows: customerRows } = await sql`SELECT * FROM customer WHERE Customer_email = ${email} AND Customer_password = ${password};`;
  if (customerRows.length != 0) {
    return Response.json({ found: true, data: customerRows[0], isAdmin: false});
  }

  const { rows: adminRows }  = await sql`SELECT * FROM admin WHERE Admin_email = ${email} AND Admin_password = ${password};`;
  if (adminRows.length != 0) {
    return Response.json({ found: true, data: adminRows[0], isAdmin: true});
  }
  
  return Response.json({ found: false, message: 'Login failed.' });
}