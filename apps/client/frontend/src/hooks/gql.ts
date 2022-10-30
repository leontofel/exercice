/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\nquery UserInfo($id: Int!){\n    getUserById(\n        id: $id\n        ){\n        name,\n        city,\n        pet,\n        tech_stack,\n        married,\n        birthday\n      }\n  }\n": types.UserInfoDocument,
};

export function graphql(source: "\nquery UserInfo($id: Int!){\n    getUserById(\n        id: $id\n        ){\n        name,\n        city,\n        pet,\n        tech_stack,\n        married,\n        birthday\n      }\n  }\n"): (typeof documents)["\nquery UserInfo($id: Int!){\n    getUserById(\n        id: $id\n        ){\n        name,\n        city,\n        pet,\n        tech_stack,\n        married,\n        birthday\n      }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;