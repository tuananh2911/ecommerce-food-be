import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { category } from './category.entity';
@Entity()
export class product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  des: string;

  @Column()
  discount: string;

  @Column()
  price: string;

  @Column()
  quantity: string;

  @Column()
  image: string;

  @ManyToOne(() => category, (categoryId: category) => categoryId.id)
  categoryId: number;
}
