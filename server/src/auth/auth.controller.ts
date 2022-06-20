import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req) {
    console.log('req', req);
  }

  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req) {
    // this.authService.
    return this.authService.googleLogin(req);
  }

  @Get('status')
  status() {}

  @Get('logout')
  logout() {}
}
