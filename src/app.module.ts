import {join} from 'path'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from '@nestjs/serve-static'
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from "@nestjs/mongoose";
import { TestModule } from './test/test.module';
import * as Joi from '@hapi/joi'

@Module({
  imports: [
      ServeStaticModule.forRoot({
        rootPath:join(__dirname,'..','public')
      }),
      ConfigModule.forRoot({
          envFilePath: `${join(__dirname,'..','config')}/.env.${process.env.NODE_ENV || 'development'}`,
          isGlobal: true,
          validationSchema:Joi.object({
              NODE_ENV: Joi.string()
                  .valid('development','production','release','test')
                  .default('development'),
              ENV_ABBR: Joi.string().valid('dev','prod','rls','tst').default('dev')
          }),
          validationOptions: {
              allowUnknow: false,
              abortEarly: true
          }
      }),
      MongooseModule.forRoot('mongodb://localhost:27017/test',{
          useNewUrlParser: true,
          useUnifiedTopology: true,
      }),
      TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
