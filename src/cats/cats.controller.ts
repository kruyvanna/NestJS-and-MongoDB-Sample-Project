import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() data: Cat) {
    return this.catsService.create(data);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() data: Cat) {
    return this.catsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
