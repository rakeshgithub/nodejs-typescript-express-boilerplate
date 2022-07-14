import {
  Get,
  Post,
  Body,
  Route,
  Controller,
  Security,
  Middlewares,
  Example,
} from "tsoa";
import validate from "../middlewares/validateRequest";
import * as businessSchema from "../dto/business.schema";
import * as businessRepository from "../repositories/business";

@Route("business")
export class BusinessController extends Controller {
  @Security("jwt")
  @Middlewares([validate(businessSchema.createBusinessSchema)])
  @Post("create")
  public async create(@Body() req: any): Promise<void> {
    console.log("Request", req);
    this.setStatus(200);
    //this.setStatus(201);
    //res.status(200).send("hiiiiiiiiiiii");
    // return "loginnnnn";
  }

  @Security("jwt")
  @Example({ data: {} })
  @Middlewares([validate(businessSchema.filterBusinessSchema)])
  @Post("filter")
  public async list(@Body() req: any): Promise<void> {
    console.log("Request", req);

    this.setStatus(200);
    //this.setStatus(201);
    //res.status(200).send("hiiiiiiiiiiii");
    // return "loginnnnn";
  }
}
