import getConfig from "next/config";
import mysql from "mysql2/promise";
import fs from "fs";

const { serverRuntimeConfig } = getConfig();

async function init() {
  const { host, port, user, password, database } = serverRuntimeConfig.dbConfig;
  const connectionPool = await mysql.createPool({
    host,
    port,
    user,
    password,
    database,
    ssl: {
      ca: fs.readFileSync("helpers/SSLCertification.pem"),
    },
  });

  connectionPool.getConnection((err, connection) => {
    if (err)
      return console.error("Error connecting to MySQL database:", err.stack);
    console.log("Connected to MySQL database as id", connection.threadId);
    connection.release();
  });

  db.pool = connectionPool;
}

async function close() {
  if (db.pool) {
    await db.pool.end();
    db.pool = null;
  }
}

export const db = {
  init,
  close,
  pool: null,
};
