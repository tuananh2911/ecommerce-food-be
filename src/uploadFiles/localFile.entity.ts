import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class localfile {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  filename: string;

  @Column()
  path: string;

  @Column()
  mimetype: string;
}
