import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema.js';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task-dto.js';
import { UpdateTaskDto } from '../dto/update-task-dto.js';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private TaskModel: Model <Task>){ }

    findAll(){
        this.TaskModel.find();
    }
    async create(createTask: CreateTaskDto){
        const createdTask = new this.TaskModel(createTask);
        return createdTask.save();
    }
    async findOne(id: string){
        return this.TaskModel.findById(id);
    }
    async update(id: string, updateTask:UpdateTaskDto){
return this.TaskModel.findByIdAndUpdate(id, updateTask, {new: true})
    }
    async delete(id: string){
        return this. TaskModel.findByIdAndDelete(id);
    }
}
