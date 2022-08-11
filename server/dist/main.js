"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const PORT = +process.env.PORT || 3000;
const start = async () => {
    const server = await core_1.NestFactory.create(app_module_1.default);
    server.listen(PORT);
};
start();
//# sourceMappingURL=main.js.map