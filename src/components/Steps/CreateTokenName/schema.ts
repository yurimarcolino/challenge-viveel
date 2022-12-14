import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export interface TokenNameShape {
  name: string;
}

export interface TokenNameFormShape {
  tokenName: TokenNameShape;
}

const schema = zod.object({
  tokenName: zod.object({
    name: zod
      .string()
      .min(1, { message: "Token name required" })
      .max(10, { message: "Token name be at most 10 characters" }),
  }),
});

export const resolver = zodResolver(schema);
