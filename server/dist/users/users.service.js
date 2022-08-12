"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../schemas/user.schema");
const bcrypt_1 = require("bcrypt");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getAll() {
        const users = await this.userModel.find();
        return users;
    }
    async getOne(id) {
        try {
            const user = await this.userModel.findById(id);
            return user;
        }
        catch (e) {
            throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async delete(id) {
        try {
            const deletedUser = await this.userModel.findByIdAndDelete(id);
            return deletedUser;
        }
        catch (error) {
            throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async createUser(createUser) {
        try {
            const hashedPassword = await (0, bcrypt_1.hash)(createUser.password, 4);
            const createdUser = await this.userModel.create(Object.assign(Object.assign({}, createUser), { password: hashedPassword }));
            return createdUser;
        }
        catch (e) {
            throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "createUser", null);
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.default = UsersService;
//# sourceMappingURL=users.service.js.map