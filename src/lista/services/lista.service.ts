import { Get, HttpCode, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Lista } from "../entities/lista.entity";


@Injectable()
export class ListaService{
    

    constructor(
        @InjectRepository(Lista)
        private listaRepository: Repository<Lista>
    ){}

    async findall(): Promise<Lista[]>{
        return await this.listaRepository.find()   
    }

    async FindById(id: number): Promise<Lista>{
        let lista = await this.listaRepository.findOne({
            where:{
                id
            }
        })

        if(!lista)
        throw new HttpException('Lista não encotrada', HttpStatus.NOT_FOUND)
        return lista
    }
    
    async create(lista: Lista): Promise<Lista>{
        return await this.listaRepository.save(lista)
    }

    async update(lista: Lista): Promise<Lista>{
        let  acharId: Lista = await this.FindById(lista.id)

        if(!acharId || !lista)
        throw new HttpException('Lista não encontrada',HttpStatus.NOT_FOUND)
        return await this.listaRepository.save(lista)
    }

    async delete(id:number): Promise<DeleteResult>{
    let BuscarLista = await this.FindById(id)

        if(!BuscarLista)
        throw new HttpException('categoria deletada', HttpStatus.NOT_FOUND)

        return await this.listaRepository.delete(id)
    }
    
}


            












