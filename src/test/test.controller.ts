import { Controller, Get, Post, Body } from '@nestjs/common';
import {AppService} from "../app.service";
import {TestService} from "./test.service";
import {User} from "./interfaces/user.interface";
import {CreateUserDto} from "./dtos/create-user.dto";

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Post()
    async create(@Body() createCatDto: CreateUserDto) {
        await this.testService.create(createCatDto);
    }

    @Get('getall')
    async findAll(): Promise<User[]> {
        return this.testService.findAll();
    }
}
