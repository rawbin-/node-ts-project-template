import {join} from 'path'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from '@nestjs/serve-static'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
      ServeStaticModule.forRoot({
        rootPath:join(__dirname,'..','public')
      }),
      ConfigModule.forRoot({
          envFilePath: `${join(__dirname,'..','config')}/.env.${process.env.NODE_ENV || 'development'}`,
          isGlobal: true
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
