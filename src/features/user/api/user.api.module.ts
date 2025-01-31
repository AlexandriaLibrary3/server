import { Module } from '@nestjs/common';

import { CategoryModule } from 'src/features/category/app';

import { UserModule } from '../app';
import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { UserFacade } from './facades/user.facade';
import { AuthFacade } from './facades/auth.facade';
import { FileModule } from '../../file/app';

@Module({
    imports: [
        CategoryModule,
        FileModule,
        UserModule,
    ],
    controllers: [
        AuthController,
        UserController,
    ],
    providers: [
        AuthFacade,
        UserFacade,
    ],
    exports: [
        UserModule,
    ],
})
export class UserApiModule {
}
