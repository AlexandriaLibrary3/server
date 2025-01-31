import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import {
    CollectionPaginationDto,
    CreateCollectionBodyDto,
    GetCollectionsQueryDto,
    UpdateCollectionBodyDto,
} from '../app';
import { UserParam } from '../../user/api';
import { UserModel } from '../../user/app';
import { CollectionFacade } from './collection.facade';

@Controller({ path: 'collections', version: '1' })
@ApiTags('사진첩')
@ApiBearerAuth()
export class CollectionController {

    constructor(
        private readonly collectionFacade: CollectionFacade,
    ) {
    }

    @Get()
    @ApiOperation({ summary: '사진첩 목록 조회' })
    @ApiResponse({ type: CollectionPaginationDto })
    async getCollections(
        @UserParam() user: UserModel,
        @Query() body: GetCollectionsQueryDto,
    ) {
        return await this.collectionFacade.getCollections(user.id, body);
    }

    @Post()
    @ApiOperation({ summary: '사진첩 생성' })
    async create(
        @UserParam() user: UserModel,
        @Body() body: CreateCollectionBodyDto,
    ) {
        return this.collectionFacade.create(user.id, body);
    }

    @Put(':collectionId')
    @ApiOperation({ summary: '사진첩 수정' })
    async update(
        @UserParam() user: UserModel,
        @Param('collectionId') collectionId: string,
        @Body() body: UpdateCollectionBodyDto,
    ) {
        return this.collectionFacade.update(user.id, collectionId, body);
    }
}
