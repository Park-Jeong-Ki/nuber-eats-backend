import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestuarantModule } from './restuarant/restuarant.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    RestuarantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
