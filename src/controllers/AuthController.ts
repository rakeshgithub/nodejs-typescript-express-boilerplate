import {
  Get,
  Post,
  Body,
  Route,
  Controller,
  SuccessResponse,
  Middlewares,
} from "tsoa";
import validate from "../middlewares/validateRequest";
import * as userRepository from "../repositories/user";
import loginSchema from "../dto/login.schema";
import { ILoginResponse } from "../repositories/user";

@Route("auth")
export class AuthController extends Controller {
  @Middlewares([validate(loginSchema)])
  @SuccessResponse(200, "Successfully logged in")
  @Post("login")
  public async login(@Body() req: any): Promise<ILoginResponse | null> {
    let data = await userRepository.login(req.email, req.password);
    console.log("Data", data);
    if (!data) {
      this.setStatus(401);
      return null;
    } else {
      this.setStatus(200);
      return data;
    }
  }
}
