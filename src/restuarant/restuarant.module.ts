import { Module } from '@nestjs/common';
import { RestuarantResolver } from './restuarant.resolver';

@Module({
  providers: [RestuarantResolver],
})
export class RestuarantModule {}
