import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export interface TokenDistributionShape {
  name: string;
  amount: number;
}

export interface TokenDistributionFormShape {
  tokenDistribution: TokenDistributionShape[];
}

const schema = zod.object({
  tokenDistribution: zod.array(
    zod.object({
      name: zod.string().min(1, { message: "Name required" }),
      amount: zod.number().min(1, { message: "Amount required" }),
    })
  ),
});

export const resolver = zodResolver(schema);
