import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { TestController } from './test.controller';
import { TestService } from './test.service';
import {UserSchema} from "./schemas/user.schema";

@Module({
  imports:[
      MongooseModule.forFeature([{
        name: 'User',
        schema: UserSchema,
          collection:'user'
      }])
  ],
  providers: [TestService],
  controllers: [TestController]
})
export class TestModule {}
