import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { customer } from '../entity/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([customer])],
  providers: [CustomerService],
  controllers: [CustomerController],
  exports: [CustomerModule],
})
export class CustomerModule {}
