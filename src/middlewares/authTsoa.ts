import * as express from "express";
import * as jwt from "jsonwebtoken";
import * as fs from "fs";
import * as path from "path";

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  try {
    if (securityName === "api_key") {
      let token;
      if (request.query && request.query.access_token) {
        token = request.query.access_token;
      }

      if (token === "abc123456") {
        return Promise.resolve({
          id: 1,
          name: "Ironman",
        });
      } else {
        return Promise.reject({});
      }
    }

    if (securityName === "jwt") {
      let token =
        request.body.token ||
        request.query.token ||
        request.headers["x-access-token"] ||
        request.headers["authorization"];

      token = token.replace("Bearer ", "");
      return new Promise((resolve, reject) => {
        if (!token) {
          reject(new Error("No token provided"));
        }
        const publicKey = fs.readFileSync(
          path.join(__dirname, "./../../jwtRS256.key.pub")
        );

        const verifyOptions: jwt.VerifyOptions = {
          algorithms: ["RS256"],
        };

        jwt.verify(
          token,
          publicKey,
          verifyOptions,
          function (err: any, decoded: any) {
            if (err) {
              reject(err);
            } else {
              // Check if JWT contains all required scopes
              if (scopes) {
                for (let scope of scopes) {
                  if (!decoded.scopes.includes(scope)) {
                    reject(new Error("JWT does not contain required scope."));
                  }
                }
              }
              resolve(decoded);
            }
          }
        );
      });
    }
    return Promise.reject("error");
  } catch (error) {
    return Promise.reject(error);
  }
}
