import { Injectable } from '@nestjs/common';
import { response } from 'express';

@Injectable()
export class AppService {
  getHello(): any {
    const x =  {cat: 'hello'}
    return x;
  }
}
