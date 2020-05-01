import {Controller, Get, Render, Res} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import { AppService } from './app.service';
import {Response} from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,public readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('testtpl')
  @Render('test')
  getHelloTpl(){
    return {
      helloMsg: 'Hello Message, Hello Message'
    }
  }

  @Get('testdtpl')
  getHelloDynamicTpl(@Res() res: Response){
    return res.render(
        this.appService.getViewName(),
        {
          helloMsg: 'Hello Dynamic Message'
        }
    )
  }

  @Get('testconfig')
  getConfig(){
    return {
      nodeEnv:this.configService.get<string>('NODE_ENV'),
      envAbbr:this.configService.get<string>('ENV_ABBR')
    }
  }
}
