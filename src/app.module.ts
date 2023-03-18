import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
