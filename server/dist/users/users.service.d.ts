import { HttpException } from "@nestjs/common";
import mongoose, { Model } from "mongoose";
import { User, UserDocument } from "src/schemas/user.schema";
import createUserDTO from "./dto/create-user.dto";
declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getAll(): Promise<User[]>;
    getOne(id: mongoose.Types.ObjectId): Promise<User | HttpException>;
    delete(id: mongoose.Types.ObjectId): Promise<User | HttpException>;
    createUser(createUser: createUserDTO): Promise<User | HttpException>;
}
export default UsersService;
