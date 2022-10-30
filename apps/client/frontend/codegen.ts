import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5005/graphql",
  documents: "src/**/*.ts",
  generates: { 
    "src/hooks/": {
      preset: "client",
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  },
  
};

export default config;
