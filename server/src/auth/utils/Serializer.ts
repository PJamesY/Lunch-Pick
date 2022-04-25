import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/users/user.entity';

// @Injectable()
// export class SessionSerializer extends PassportSerializer {
//   constructor() {}

//   serializeUser(user: User, done: (err: Error, user: User) => void) {
//     done(null, user);
//   }

//   deserializeUser(user: User, done: (err: Error, user: User) => void) {
//     let userDb;
//     done(null, userDb);
//   }
// }
