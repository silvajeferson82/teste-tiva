import jwt from "jsonwebtoken";
import { promisify } from "util";

import Users from "../app/models/Users/entities/Users";

import authConfig from "../config/auth";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const email = req.body;
  console.log(email);
//   const userAdmin = await Users.findOne({ where: { email }})

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalid" });
  }
};
