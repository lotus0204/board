export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export class VerfyEmailDto {
  signupVerfyToken: string;
}

export class UserLogInDto {
  email: string;
  password: string;
}
