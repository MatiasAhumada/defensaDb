import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_empleados')
export class TipoEmpleado {
  @PrimaryGeneratedColumn({ name: 'tipo_empleado_id' })
  tipoEmpleadoId: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;
}

