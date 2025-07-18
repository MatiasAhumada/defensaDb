import { MigrationInterface, QueryRunner } from "typeorm";

export class HastatipoEmpleado1752859666523 implements MigrationInterface {
    name = 'HastatipoEmpleado1752859666523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tipo_departamentos\` (\`tipo_departamento_id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`descripcion\` text NULL, PRIMARY KEY (\`tipo_departamento_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sucursales\` (\`sucursal_id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(150) NOT NULL, \`direccion_id\` int NOT NULL, PRIMARY KEY (\`sucursal_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`departamentos\` (\`departamento_id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`sucursal_id\` int NOT NULL, \`tipo_departamento_id\` int NOT NULL, PRIMARY KEY (\`departamento_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tipo_empleados\` (\`tipo_empleado_id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`descripcion\` text NULL, PRIMARY KEY (\`tipo_empleado_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD CONSTRAINT \`FK_b8114090e58725c907e0cc812b6\` FOREIGN KEY (\`direccion_id\`) REFERENCES \`direcciones\`(\`direccion_id\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`departamentos\` ADD CONSTRAINT \`FK_679a6bab907692d009ecffd2de0\` FOREIGN KEY (\`sucursal_id\`) REFERENCES \`sucursales\`(\`sucursal_id\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`departamentos\` ADD CONSTRAINT \`FK_2a958960b646fd36a109a8e3229\` FOREIGN KEY (\`tipo_departamento_id\`) REFERENCES \`tipo_departamentos\`(\`tipo_departamento_id\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`departamentos\` DROP FOREIGN KEY \`FK_2a958960b646fd36a109a8e3229\``);
        await queryRunner.query(`ALTER TABLE \`departamentos\` DROP FOREIGN KEY \`FK_679a6bab907692d009ecffd2de0\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP FOREIGN KEY \`FK_b8114090e58725c907e0cc812b6\``);
        await queryRunner.query(`DROP TABLE \`tipo_empleados\``);
        await queryRunner.query(`DROP TABLE \`departamentos\``);
        await queryRunner.query(`DROP TABLE \`sucursales\``);
        await queryRunner.query(`DROP TABLE \`tipo_departamentos\``);
    }

}
