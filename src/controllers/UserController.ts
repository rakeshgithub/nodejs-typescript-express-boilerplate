import { Request, Response } from "express";
import {
  Get,
  Post,
  Body,
  Route,
  Controller,
  Security,
  Middlewares,
} from "tsoa";

@Route("user")
export class UserController extends Controller {
  @Security("jwt")
  @Get("list")
  public async list() {
    return {
      message: "pong through route",
    };
  }

  @Security("jwt")
  @Post("create")
  public async create(@Body() req: any): Promise<void> {
    console.log("Request", req);
    this.setStatus(200);
    //this.setStatus(201);
    //res.status(200).send("hiiiiiiiiiiii");
    // return "loginnnnn";
  }
}
