import { Controller,Get } from '@nestjs/common';

@Controller('premier')
export class PremierController {
    
    
    @Get()
  getHello(): string {
    return "get";
  }

}
