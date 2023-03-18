import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendMemberJoinVerifiation(email: string, signUpverfyToken: string) {
    const baseUrl = 'http://localhost:3000';
    const url = `${baseUrl}/users/email-verify?signupVerfyToken=${signUpverfyToken}`;

    const emailOptions: EmailOptions = {
      to: email,
      subject: '회원가입을 축하합니다.',
      html: `버튼을 누르세요 <form action="${url}" method="POST">
        <button>이메일 인증</button>
      </form>`,
    };

    await this.transporter.sendMail(emailOptions);
  }
}
