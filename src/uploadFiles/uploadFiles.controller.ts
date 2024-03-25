import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
//import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
//import RequestWithUser from '../authentication/requestWithUser.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import LocalFilesService from './uploadFiles.service';

@Controller('uploadFiles')
export class uploadedFilesController {
  constructor(private readonly uploadFilesService: LocalFilesService) {}

  @Post('avatar')
  //@UseGuards(JwtAuthenticationGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.uploadFilesService.saveLocalFileData({
      path: file.path,
      filename: file.filename,
      mimetype: file.mimetype,
    });
  }
  // async addAvatar(
  //   //@Req() request: RequestWithUser,
  //   @UploadedFile() file: Express.Multer.File,
  // ) {
  //   return this.uploadFilesService.saveLocalFileData(
  //     //    request.user.id,
  //     {
  //       path: file.path,
  //       filename: file.originalname,
  //       mimetype: file.mimetype,
  //     },
  //   );
  // }
}
