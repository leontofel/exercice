/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: Scalars['String'];
  updateUser: User;
};


export type MutationCreateUserArgs = {
  NewUserInput: NewUserInput;
};


export type MutationUpdateUserArgs = {
  updateInput: UpdateInput;
};

export type NewUserInput = {
  birthday: Scalars['DateTime'];
  city: Scalars['String'];
  email: Scalars['String'];
  married: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
  pet: Scalars['String'];
  tech_stack: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getLoggedUserInfo: User;
  getUserById: User;
  login: Scalars['String'];
};


export type QueryGetLoggedUserInfoArgs = {
  emailForInfo: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  birthday: Scalars['DateTime'];
  city: Scalars['String'];
  id: Scalars['Int'];
  married: Scalars['Boolean'];
  name: Scalars['String'];
  pet: Scalars['String'];
  tech_stack: Scalars['String'];
};

export type UserDto = {
  birthday: Scalars['DateTime'];
  city: Scalars['String'];
  id: Scalars['Int'];
  married: Scalars['Boolean'];
  name: Scalars['String'];
  pet: Scalars['String'];
  tech_stack: Scalars['String'];
};

export type UpdateInput = {
  birthday: Scalars['DateTime'];
  city: Scalars['String'];
  id: Scalars['Int'];
  married: Scalars['Boolean'];
  name: Scalars['String'];
  pet: Scalars['String'];
  tech_stack: Scalars['String'];
};

export type UserInfoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserInfoQuery = { __typename?: 'Query', getUserById: { __typename?: 'User', name: string, city: string, pet: string, tech_stack: string, married: boolean, birthday: any } };


export const UserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"pet"}},{"kind":"Field","name":{"kind":"Name","value":"tech_stack"}},{"kind":"Field","name":{"kind":"Name","value":"married"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}}]}}]}}]} as unknown as DocumentNode<UserInfoQuery, UserInfoQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: Scalars['String'];
  updateUser: User;
};


export type MutationCreateUserArgs = {
  NewUserInput: NewUserInput;
};


export type MutationUpdateUserArgs = {
  updateInput: UpdateInput;
};

export type NewUserInput = {
  birthday: Scalars['DateTime'];
  city: Scalars['String'];
  email: Scalars['String'];
  married: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
  pet: Scalars['String'];
  tech_stack: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getLoggedUserInfo: User;
  getUserById: User;
  login: Scalars['String'];
};


export type QueryGetLoggedUserInfoArgs = {
  emailForInfo: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  birthday: Scalars['DateTime'];
  city: Scalars['String'];
  id: Scalars['Int'];
  married: Scalars['Boolean'];
  name: Scalars['String'];
  pet: Scalars['String'];
  tech_stack: Scalars['String'];
};

export type UserDto = {
  birthday: Scalars['DateTime'];
  city: Scalars['String'];
  id: Scalars['Int'];
  married: Scalars['Boolean'];
  name: Scalars['String'];
  pet: Scalars['String'];
  tech_stack: Scalars['String'];
};

export type UpdateInput = {
  birthday: Scalars['DateTime'];
  city: Scalars['String'];
  id: Scalars['Int'];
  married: Scalars['Boolean'];
  name: Scalars['String'];
  pet: Scalars['String'];
  tech_stack: Scalars['String'];
};

export type UserInfoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserInfoQuery = { __typename?: 'Query', getUserById: { __typename?: 'User', name: string, city: string, pet: string, tech_stack: string, married: boolean, birthday: any } };


export const UserInfoDocument = gql`
    query UserInfo($id: Int!) {
  getUserById(id: $id) {
    name
    city
    pet
    tech_stack
    married
    birthday
  }
}
    `;

/**
 * __useUserInfoQuery__
 *
 * To run a query within a React component, call `useUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserInfoQuery(baseOptions: Apollo.QueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, options);
      }
export function useUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, options);
        }
export type UserInfoQueryHookResult = ReturnType<typeof useUserInfoQuery>;
export type UserInfoLazyQueryHookResult = ReturnType<typeof useUserInfoLazyQuery>;
export type UserInfoQueryResult = Apollo.QueryResult<UserInfoQuery, UserInfoQueryVariables>;