import { HttpException } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { User } from "src/schemas/user.schema";
import createUserDTO from "./dto/create-user.dto";
import UsersService from "./users.service";
declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<User[]>;
    getOne(id: ObjectId): Promise<User | HttpException>;
    createUser(body: createUserDTO): Promise<User | HttpException>;
    delete(id: ObjectId): Promise<User | HttpException>;
}
export default UsersController;
