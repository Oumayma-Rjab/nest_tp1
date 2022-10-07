import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateToDodto } from 'src/dto/UpdateTodoDto.dto';
import { Todo } from 'src/to-do-module/Model/todo.model';

@Injectable()
export class ToDoService {

    private t = new Todo(1,"Oumayma");
    private t1 = new Todo(2,"Ghofrane");
    private todos :Todo[]=[this.t,this.t1];

    getToDos() : Todo[] {

      return this.todos;
    }
    getToDoId( id ):any {
      var obj=this.todos.find(x=> x.id==id);
      if (!obj) throw new NotFoundException('todo not found');
        return  obj;

    } 
    DeleteToDoId( id ):any {
        var arr = this.todos.filter(x=> x.id!=id);
        if (arr.length!=this.todos.length) 
        {this.todos=arr;
        return arr;}
        else throw new NotFoundException('todo not found already');

    } 
   /* AddTodo(name , description): Todo{
    
    }*/
    UpdateToDoId(updateToDodto:UpdateToDodto ):any {
      console.log(updateToDodto);
      var obj= this.todos.find(x=> updateToDodto.id==x.id)
      if (!obj) throw new NotFoundException('todo not found to be updateed');
      obj.name= updateToDodto.name??obj.name;
      obj.description=  updateToDodto.description ?? obj.description;
      return this.todos;

  } 
}
