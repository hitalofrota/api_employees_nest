import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from './employee.repository';
import { Employee } from './schema/employee.schema';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeeRepository: EmployeesRepository) {}

  async create(employeeData: Partial<Employee>): Promise<Employee> {
    return this.employeeRepository.create(employeeData);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.findAll();
  }

  async findById(id: string): Promise<Employee> {
    return this.employeeRepository.findById(id);
  }

  async update(id: string, employeeData: Partial<Employee>): Promise<Employee> {
    return this.employeeRepository.update(id, employeeData);
  }

  async remove(id: string): Promise<Employee> {
    return this.employeeRepository.delete(id);
  }
}
