import { Module } from '@nestjs/common';
import { EtudiantsService } from './etudiants.service';
import { EtudiantsController } from './etudiants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etudiant } from './entities/etudiant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Etudiant])],
  controllers: [EtudiantsController],
  providers: [EtudiantsService],
})
export class EtudiantsModule {}
