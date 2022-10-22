import { Injectable } from '@nestjs/common';
import { Message } from '@bp-nx-trial/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
