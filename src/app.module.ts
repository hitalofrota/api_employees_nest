import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tallosUsuarios:tallosUsuarios@listausuarios.yvrh2vl.mongodb.net/?retryWrites=true&w=majority'),
    EmployeesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
