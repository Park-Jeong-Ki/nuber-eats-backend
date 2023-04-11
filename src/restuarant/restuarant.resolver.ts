import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestuarantResolver {
  @Query(() => Boolean)
  isPizzaGood(): boolean {
    return true;
  }
}
