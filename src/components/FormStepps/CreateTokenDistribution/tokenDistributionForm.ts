import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export interface TokenDistributionShape {
  name: string;
  amount: string;
}

export interface TokenDistributionFormShape {
  tokenDistribution: TokenDistributionShape[];
}

const schema = zod.object({
  tokenDistribution: zod.array(
    zod.object({
      name: zod.string().min(3, { message: "Name required" }),
      amount: zod.string().min(1, { message: "Amount required" }),
    })
  ),
});

export const emptyTokenDistribution: TokenDistributionShape = {
  name: "",
  amount: "",
};

export function useTokenDistributionForm() {
  return useForm<TokenDistributionFormShape>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
    defaultValues: {
      tokenDistribution: [emptyTokenDistribution],
    },
  });
}
