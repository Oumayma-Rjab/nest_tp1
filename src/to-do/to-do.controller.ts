import { Controller, Get, Param,Delete, Patch,Query,Body, HttpStatus, NotFoundException } from '@nestjs/common';
import { retry } from 'rxjs';
import { UpdateToDodto } from 'src/dto/UpdateTodoDto.dto';
import { Todo } from 'src/to-do-module/Model/todo.model';
import { ToDoService } from './to-do.service';

@Controller('to-do')
export class ToDoController {
    private t = new Todo(1,"Oumayma");
    private t1 = new Todo(2,"Ghofrane");
    private todos :Todo[]=[this.t,this.t1];
    constructor(private todoService:ToDoService ){}
    @Get()
    getToDos() : Todo[] {
      return this.todos;
    }
    @Get('/:id')
    getToDoId(@Param('id') id ):any {
      return this.todoService.getToDoId(id);

    } 
    @Delete('/:id')
    DeleteToDoId(@Param('id') id ):any {
      return this.todoService.DeleteToDoId(id);

    } 
    @Patch("/:id?")
    UpdateToDoId(@Body() updateToDodto:UpdateToDodto ):any {
 
      return this.todoService.UpdateToDoId(updateToDodto);

  } 
}
