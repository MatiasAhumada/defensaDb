import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('paises')
export class Pais {
  @PrimaryGeneratedColumn({ name: 'pais_id' })
  paisId: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;
}
