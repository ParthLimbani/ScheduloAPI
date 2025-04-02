import jwt from "jsonwebtoken";
import { appConfig } from "../config/appConfig.js";
import User from "../module/user/user.model.js";

const verifyUserRole = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer")) {
        return res.status(401).json({ message: "Not Authorized, No Token" });
      }

      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Not Authorized, No Token" });
      }

      const decoded = jwt.verify(token, appConfig.jwtSecret);
      if (!decoded) {
        return res.status(401).json({ message: "Invalid Token" });
      }

      const user = await User.findOne({ _id: decoded.userId });
      if (!user) {
        return res.status(401).json({ message: "User does not exist" });
      }

      const hasAccess = allowedRoles.includes(decoded.role);
      if (!hasAccess) {
        return res.status(403).json({ message: "Forbidden - Insufficient Permissions" });
      }

      req.user = user;
      return next();
    } catch (err) {
      return res.status(401).json({ message: "Not Authorized" });
    }
  };
};

export default verifyUserRole ;

