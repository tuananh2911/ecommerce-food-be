import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customer } from '../entity/customer.entity';

@Controller('Customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post('/addCus')
  async addCustomer(@Body() customerDto: customer) {
    return this.customerService.addCustomer(customerDto);
  }

  @Get('/getall')
  async findAll(): Promise<customer[]> {
    return this.customerService.findAll();
  }
}
