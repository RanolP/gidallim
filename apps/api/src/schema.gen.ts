import { createBuilder } from "./builder";
import { install as installModuleTestSum } from "./modules/test-sum/presentation";

export function buildSchema() {
  const builder = createBuilder();
  installModuleTestSum(builder);

  return builder.toSchema();
}
