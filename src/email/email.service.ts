import { Inject, Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import { ConfigType } from '@nestjs/config';
import emailConfig from '../config/emailConfig';
import * as nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  constructor(
    @Inject(emailConfig.KEY) private config: ConfigType<typeof emailConfig>,
  ) {
    this.transporter = nodemailer.createTransport({
      service: config.service,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    });
  }

  private transporter: Mail;

  async sendMemberJoinVerifiation(email: string, signUpverfyToken: string) {
    const baseUrl = this.config.baseUrl;
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
