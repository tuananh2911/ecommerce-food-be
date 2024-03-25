import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { product } from './product.entity';

@Entity()
export class category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => product, (productId: product) => productId.id)
  productId: [];
}
