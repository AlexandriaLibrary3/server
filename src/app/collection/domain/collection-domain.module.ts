import { Module } from '@nestjs/common';

import { CollectionService } from './collection.service';
import { CollectionRepository } from '../infrastructure';

@Module({
    providers: [CollectionService, CollectionRepository],
    exports: [CollectionService],
})
export class CollectionDomainModule {
}
