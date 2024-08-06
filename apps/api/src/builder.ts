import SchemaBuilder from "@pothos/core";

export const createBuilder = () =>
  new SchemaBuilder<{
    DefaultInputFieldRequiredness: true;
  }>({
    defaultInputFieldRequiredness: true,
  });

export type Presentation = (builder: ReturnType<typeof createBuilder>) => void;
