import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { User, UserDocument } from "src/schemas/user.schema";
import createUserDTO from "./dto/create-user.dto";
@Injectable()
class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}
    async getAll():Promise<User[]>{
        const users:User[] = await this.userModel.find();
        return users;
    }
    async getOne(id:ObjectId):Promise<User | HttpException>{
        try{
            const user:User = await this.userModel.findById(id);
            return user;
        }catch(e:unknown){
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }
    }
    async delete(id:ObjectId):Promise<User | HttpException>{
        try{
            const deletedUser:User = await this.userModel.findByIdAndDelete(id);
            return deletedUser;
        }catch(error:unknown){
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }
    }
    async createUser(@Body() createUser:createUserDTO):Promise<User | HttpException>{
        try{
            const createdUser:User = await this.userModel.create(createUser);
            return createdUser;
        }catch(e:unknown){            
        throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
        }
    }
}
export default UsersService;