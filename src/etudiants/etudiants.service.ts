/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Etudiant } from './entities/etudiant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EtudiantsService {
  constructor(
    @InjectRepository(Etudiant)
    private readonly etudiantsRepository:
    Repository <Etudiant>
  ){
    
  }
  async create(createEtudiantDto: CreateEtudiantDto) {
    const etudiant = this.etudiantsRepository.create(createEtudiantDto);
    return await this.etudiantsRepository.save(etudiant);
  }

  async findAll() {
    return await this.etudiantsRepository.find();
  }

  async findOne(id: number) {
    return await this.etudiantsRepository.findOne({
      where: { id }
    });
  }

  async update(id: number, updateEtudiantDto: UpdateEtudiantDto) {
    const etudiant = await this.findOne(id);

    if(!etudiant){
      throw new NotFoundException()
    }

    Object.assign(etudiant, updateEtudiantDto);

    return await this.etudiantsRepository.save(etudiant);
  }

  async remove(id: number) {
    const etudiant = await this.findOne(id);
    if(!etudiant){
      throw new NotFoundException();
    }
    return await this.etudiantsRepository.remove(etudiant);
  }
}
