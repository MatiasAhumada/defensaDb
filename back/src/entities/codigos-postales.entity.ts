import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Ciudad } from './ciudades.entity';

@Entity('codigos_postales')
export class CodigoPostal {
  @PrimaryGeneratedColumn({ name: 'codigo_postal_id' })
  codigo_postal_id: number;

  @Column({ name: 'codigo', type: 'varchar', length: 20, nullable: false })
  codigo: string;

  @ManyToOne(() => Ciudad, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'ciudad_id' })
  ciudad: Ciudad;
}
