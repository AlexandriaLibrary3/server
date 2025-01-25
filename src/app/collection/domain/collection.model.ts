import { plainToInstance } from 'class-transformer';

import { OrmModel } from 'src/shared/database';
import { nanoid } from 'nanoid';

export class CollectionModel extends OrmModel {

    readonly collectionId: string;
    readonly title: string;
    readonly userId: string;
    readonly categoryId: string;

    static from(param: CreateCollectionParam) {
        return plainToInstance(CollectionModel, {
            collectionId: nanoid(30),
            title: param.title,
            userId: param.userId,
            categoryId: param.categoryId,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
        } as CollectionModel);
    }

    static fromDrizzleModel(param: any) {
        return plainToInstance(CollectionModel, param as CollectionModel);
    }

    withUpdate(title: string, categoryId: string) {
        return plainToInstance(CollectionModel, {
            ...this,
            title,
            categoryId,
            updatedAt: new Date(),
        } as CollectionModel);
    }
}

/**
 * Param interfaces
 */

export interface CreateCollectionParam {
    title: string;
    userId: string;
    categoryId: string;
}
