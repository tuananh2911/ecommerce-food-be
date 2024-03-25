import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { customer } from '../entity/customer.entity';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(customer)
    private customerRepository: Repository<customer>,
  ) {}

  generateUuid(): string {
    return uuidv4();
  }

  // lay danh sasch customer
  async findAll(): Promise<customer[]> {
    return this.customerRepository.find({
      select: ['uuid', 'username', 'address', 'email'],
    });
  }

  async findOne(uuid: string): Promise<customer | null> {
    const query = this.customerRepository.findOneBy({ uuid });

    return query;
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }

  async countCustomer(): Promise<number> {
    const a = await this.customerRepository.count({});
    return a;
  }

  // kiem tra xem email da ton tai chua
  async getByEmail(email: string): Promise<customer | null> {
    const user = await this.customerRepository.findOne({ where: { email } });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  // kiem tra username xem da ton tai chua
  async getByUsername(username: string): Promise<object | null> {
    const user = await this.customerRepository.findOne({ where: { username } });
    if (user) {
      return {
        statuscode: HttpStatus.OK,
        usename: user.username,
      };
    }
    throw new HttpException(
      'User with this username does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  // dang ki
  async addCustomer(userData: customer) {
    const newUser = this.customerRepository.create(userData);
    newUser.uuid = uuidv4();
    if (await this.customerRepository.save(newUser)) {
      console.log('successfully insert');
      return {
        statuscode: HttpStatus.OK,
        status: 'Successfully inserted.',
      };
    }
    throw new HttpException('Internal server', HttpStatus.BAD_GATEWAY);
  }
}
