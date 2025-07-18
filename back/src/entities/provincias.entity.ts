import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pais } from './paises.entity';

@Entity('provincias')
export class Provincia {
  @PrimaryGeneratedColumn({ name: 'provincia_id' })
  provincia_id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @ManyToOne(() => Pais, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'pais_id' })
  pais: Pais;
}
