import { Injectable } from '@nestjs/common';
import { response } from 'express';


@Injectable()
export class WowService {
  getHello(): any {
    const x =  {cat: 'hellow from hello'}
    return x;
  }
}
