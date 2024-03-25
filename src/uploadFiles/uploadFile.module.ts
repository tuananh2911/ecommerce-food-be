import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { localfile } from './localFile.entity';
import { uploadedFilesController } from './uploadFiles.controller';
import LocalFilesService from './uploadFiles.service';
@Module({
  imports: [TypeOrmModule.forFeature([localfile])],
  providers: [LocalFilesService],
  controllers: [uploadedFilesController],
  exports: [uploadedFilesModule],
})
export class uploadedFilesModule {}
