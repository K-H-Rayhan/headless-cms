import { Injectable, Inject } from '@nestjs/common';
import { response } from 'express';
import { CreateUserRequest } from './create-user-request.dto';
import { ClientProxy } from "@nestjs/microservices"
import { CreateUserEvent } from './create-user.event';
@Injectable()
export class AppService {
  private readonly users: any[] = []
  constructor(@Inject("COMMUNICATION") private readonly communicationClient: ClientProxy) {

  }
  getHello(): any {
    const x = { cat: 'hello from micro' }
    return x;
  }
  createUser(createUserRequest: CreateUserRequest): any {
    this.users.push(createUserRequest);
    this.communicationClient.emit('user_created',
      new CreateUserEvent(createUserRequest.email)
    )
    return "send to auth service"
  }
}
