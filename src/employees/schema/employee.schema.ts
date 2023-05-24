import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface EmployeeModel {
    name: string
    email: string
    password: string
}

export type EmployeeDocument = Employee & Document

@Schema()
export class Employee implements EmployeeModel {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string

  constructor(user?: Partial<Employee>) {
    this.name = user?.name;
    this.email = user?.email;
    this.password = user?.password;
}
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);