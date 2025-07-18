import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Provincia } from './provincias.entity';

@Entity('ciudades')
export class Ciudad {
  @PrimaryGeneratedColumn({ name: 'ciudad_id' })
  ciudad_id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @ManyToOne(() => Provincia, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'provincia_id' })
  provincia: Provincia;
}
