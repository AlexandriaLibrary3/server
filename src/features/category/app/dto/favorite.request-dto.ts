import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrUpdateFavoriteBodyDto {
    @IsNotEmpty()
    @ApiProperty({ description: '카테고리 ID 목록' })
    readonly categoriesIds: string[];
}
