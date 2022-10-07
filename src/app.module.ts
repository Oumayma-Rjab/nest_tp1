import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierController } from './premier/premier.controller';
import { RequestsModule } from './requests/requests.module';
import { ToDoModuleModule } from './to-do-module/to-do-module.module';
import { ToDoController } from './to-do/to-do.controller';
import { UpdateServiceService } from './update-service/update-service.service';
import { ToDoService } from './to-do/to-do.service';


@Module({
  imports: [RequestsModule, ToDoModuleModule],
  controllers: [AppController, PremierController, ToDoController],
  providers: [AppService, ToDoService],
})
export class AppModule {}
