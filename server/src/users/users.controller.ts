import { Body, Controller, Delete, Get, Post ,HttpException, Param } from "@nestjs/common";
import mongoose from "mongoose";
import { User } from "src/schemas/user.schema";
import createUserDTO from "./dto/create-user.dto";
import UsersService from "./users.service";
@Controller()
class UsersController{
    constructor(private usersService: UsersService){}
    @Get("/users")
    getAll():Promise<User[]>{
        return this.usersService.getAll();
    }
    @Get("/users/:id")
    getOne(@Param('id') id:mongoose.Types.ObjectId):Promise<User | HttpException>{
        return this.usersService.getOne(id);
    }
    @Post("/users")
    createUser(@Body() body:createUserDTO):Promise<User|HttpException>{
        return this.usersService.createUser(body);
    }
    @Delete("/users/:id")
    delete(@Param('id') id:mongoose.Types.ObjectId):Promise<User | HttpException>{
        return this.usersService.delete(id);
    }
}
export default UsersController;