import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class customer {
  @PrimaryColumn()
  uuid: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
