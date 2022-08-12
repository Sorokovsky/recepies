import { Body, Controller, Delete, Get, Post ,HttpException, Param } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { User } from "src/schemas/user.schema";
import createUserDTO from "./dto/create-user.dto";
import UsersService from "./users.service";
@Controller('/users')
class UsersController{
    constructor(private usersService: UsersService){}
    @Get()
    getAll():Promise<User[]>{
        return this.usersService.getAll();
    }
    @Get(":id")
    getOne(@Param('id') id:ObjectId):Promise<User | HttpException>{
        return this.usersService.getOne(id);
    }
    @Post()
    createUser(@Body() body:createUserDTO):Promise<User|HttpException>{
        return this.usersService.createUser(body);
    }
    @Delete(":id")
    delete(@Param('id') id:ObjectId):Promise<User | HttpException>{
        return this.usersService.delete(id);
    }
}
export default UsersController;