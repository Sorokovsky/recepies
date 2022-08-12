import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import UsersModule from "src/users/users.module";

@Module({
    imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017/recepies', {autoIndex: true})]
})
class AppModule {}
export default AppModule;