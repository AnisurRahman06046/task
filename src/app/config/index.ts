import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.join((process.cwd(), ".env")),
});

export default {
  port: process.env.PORT,
  database_uri: process.env.DB_URI,
  jwt_scret: process.env.JWT_SECRET,
  jwt_expires_in: process.env.JWT_EXPIRES,
};
