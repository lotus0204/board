import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import { EmailService } from '../email/email.service';

@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) {}
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

  private async sendMemberJoinEmail(email: string, signUpverfyToken: string) {
    await this.emailService.sendMemberJoinVerifiation(email, signUpverfyToken);
  }

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<void> {
    this.checkUserExist(email);

    const signUpverfyToken = uuid.v1();

    await this.saveUser(name, email, password, signUpverfyToken);
    await this.sendMemberJoinEmail(email, signUpverfyToken);
  }

  async verfyEmail(signupVerfyToken: string): Promise<string> {
    throw new Error('Not Implemented');
    return signupVerfyToken;
  }

  async login(email: string, password: string): Promise<string> {
    throw new Error('Not Implemented');
    return email;
  }

  async getUserInfo(userId: string): Promise<string> {
    throw new Error('Not Implemented');
    return userId;
  }
}
