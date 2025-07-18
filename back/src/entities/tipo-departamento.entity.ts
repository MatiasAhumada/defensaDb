import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_departamentos')
export class TipoDepartamento {
  @PrimaryGeneratedColumn({ name: 'tipo_departamento_id' })
  tipo_departamento_id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;
}
