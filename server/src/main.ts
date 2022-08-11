import { NestApplication, NestFactory } from "@nestjs/core";
import AppModule from "./app/app.module";
const PORT:number = +process.env.PORT || 3000;
const start = async ():Promise<void> => {
    const server:NestApplication = await NestFactory.create(AppModule);
    server.listen(PORT);
}
start();