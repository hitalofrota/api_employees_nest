import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeeSchema } from './schema/employee.schema'
import { EmployeesRepository } from './employee.repository'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }])
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeesRepository]
})

export class EmployeesModule {}
