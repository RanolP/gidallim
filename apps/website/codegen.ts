import { CodegenConfig } from "@graphql-codegen/cli";
const config: CodegenConfig = {
  schema: "./introspection.json",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/shared/graphql-codegen/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
