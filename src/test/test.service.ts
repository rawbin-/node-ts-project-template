import {Model} from "mongoose";
import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User} from "./interfaces/user.interface";
import {CreateUserDto} from "./dtos/create-user.dto";

@Injectable()
export class TestService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto)
        return createdUser.save()
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec()
    }
}
