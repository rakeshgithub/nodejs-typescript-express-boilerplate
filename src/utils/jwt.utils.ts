import { sign, SignOptions, verify, VerifyOptions } from "jsonwebtoken";
import * as fs from "fs";
import * as path from "path";

/**
 * generates JWT used for local testing
 */
export function generateToken(payload: any) {
  // read private key value
  const privateKey = fs.readFileSync(
    path.join(__dirname, "./../../jwtRS256.key")
  );

  const signInOptions: SignOptions = {
    // RS256 uses a public/private key pair. The API provides the private key
    // to generate the JWT. The client gets a public key to validate the
    // signature
    algorithm: "RS256",
    expiresIn: "1h",
  };

  // generate JWT
  return sign(payload, privateKey, signInOptions);
}

/**
 * checks if JWT token is valid
 *
 * @param token the expected token payload
 */
export async function validateToken(token: string) {
  const publicKey = fs.readFileSync(
    path.join(__dirname, "./../../../jwt-ssh-public.pub")
  );

  const verifyOptions: VerifyOptions = {
    algorithms: ["RS256"],
  };

  try {
    let decoded = verify(token, publicKey, verifyOptions);
    return decoded;
  } catch (err) {
    return false;
  }

  // return new Promise((resolve, reject) => {
  //   try {
  //     let decoded = verify(token, publicKey, verifyOptions);
  //     return decoded;
  //   } catch (err) {
  //     reject(err);
  //   }
  // });
  //   verify(token, publicKey, verifyOptions, [
  //     true,
  //     (error: any, decoded: TokenPayload) => {
  //       if (error) return reject(error);

  //       resolve(decoded);
  //     },
  //   ]);
  // });
}
