import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Employee } from './schema/employee.schema'

@Injectable()
export class EmployeesRepository {
    constructor(@InjectModel(Employee.name) private readonly employeeModel: Model<Employee>) {}

    async create(employeeData: Partial<Employee>): Promise<Employee> {
        const employee = new this.employeeModel(employeeData);
        return employee.save();
      }

      async findAll(): Promise<Employee[]> {
        return await this.employeeModel.find().exec();
      }

      async findById(id: string): Promise<Employee> {
        return await this.employeeModel.findById(id).exec()
      }  

      async update(id: string, employeeData: Partial<Employee>): Promise<Employee> {
        return await this.employeeModel.findByIdAndUpdate(id, employeeData, { new: true })
      }

      async delete(id: string): Promise<Employee> {
        return await this.employeeModel.findByIdAndRemove(id);
}
}