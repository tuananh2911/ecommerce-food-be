import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { localfile } from './localFile.entity';
import { LocalFileDto } from './localFile.dto';
@Injectable()
class LocalFilesService {
  constructor(
    @InjectRepository(localfile)
    private localFilesRepository: Repository<localfile>,
  ) {}

  async saveLocalFileData(fileData: LocalFileDto) {
    const newFile = await this.localFilesRepository.create(fileData);
    await this.localFilesRepository.save(newFile);
    return newFile;
  }
}

export default LocalFilesService;
