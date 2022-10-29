import { gql } from '@apollo/client';


export const GET_USER = gql(`
query UserInfo($token: String!){
    getLoggedUserInfo(
        token: $token
        ){
        name,
        city,
        pet,
        tech_stack,
        married,
        birthday
      }
  }
`)