import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export interface TokenSymbolShape {
  name: string;
}

export interface TokenSymbolFormShape {
  tokenSymbol: TokenSymbolShape;
}

const schema = zod.object({
  tokenSymbol: zod.object({
    name: zod
      .string()
      .min(1, { message: "Token symbol required" })
      .max(10, { message: "Token symbol must be at most 10 characters" }),
  }),
});

export const resolver = zodResolver(schema);
