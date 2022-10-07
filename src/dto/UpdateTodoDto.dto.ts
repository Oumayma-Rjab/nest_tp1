
import { PartialType } from "@nestjs/mapped-types";
import { TodoStatusEnum } from "src/to-do-module/enums/todo-status.enum";
import { Todo } from "src/to-do-module/Model/todo.model";
import { AddTodoDto } from "./add-todo.dto";

export class UpdateToDodto extends PartialType (AddTodoDto) 
{
    status : TodoStatusEnum;
    }