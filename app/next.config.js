/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    dbConfig: {
      host: "essence-database.mysql.database.azure.com",
      port: 3306,
      user: "Team5",
      password: "Password5",
      database: "Main",
    },
  },
};

module.exports = nextConfig;
