import { Cat, CatDocument } from './schemas/cat.schema';

import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  @InjectModel(Cat.name) private model: Model<CatDocument>;

  create(cat: Cat) {
    return this.model.create(cat);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  update(id: string, cat: Cat) {
    return this.model.findByIdAndUpdate(id, cat, { new: true });
  }

  delete(id: string) {
    return this.model.findByIdAndRemove(id);
  }
}
