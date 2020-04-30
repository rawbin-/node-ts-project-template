import {Controller, Get, Render, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {Response} from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
}
