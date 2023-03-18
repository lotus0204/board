import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto, UserLogInDto, VerfyEmailDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  @Post('/email-verify')
  async verifyEmail(@Body() dto: VerfyEmailDto): Promise<string> {
    const { signupVerfyToken } = dto;
    return await this.usersService.verfyEmail(signupVerfyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLogInDto): Promise<string> {
    const { email, password } = dto;

    return await this.usersService.login(email, password);
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<string> {
    return await this.usersService.getUserInfo(userId);
  }
}
