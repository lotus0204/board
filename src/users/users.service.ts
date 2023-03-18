import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

@Injectable()
export class UsersService {
  private checkUserExist(email: string) {
    return false;
  }

  private saveUser(
    name: string,
    email: string,
    password: string,
    signUpverfyToken: string,
  ) {
    return;
  }

  private sendMemberJoinEmail(email: string, signUpverfyToken: string) {
    return;
  }
  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<void> {
    await this.checkUserExist(email);

    const signUpverfyToken = uuid.v1();

    await this.saveUser(name, email, password, signUpverfyToken);
    await this.sendMemberJoinEmail(email, signUpverfyToken);
  }
}
