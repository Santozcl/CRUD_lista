import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tb_lista'})
export class Lista{

@PrimaryGeneratedColumn()
id: number

@IsNotEmpty()
@Column({length: 200, nullable: true})
descrição: string

@IsNotEmpty()
@Column({nullable: true})
feito : boolean




}