import SchemaBuilder from "@pothos/core";

export const builder = new SchemaBuilder<{
  DefaultInputFieldRequiredness: true;
}>({
  defaultInputFieldRequiredness: true,
});
