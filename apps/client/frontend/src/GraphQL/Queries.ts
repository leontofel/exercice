import { gql } from '@apollo/client';


export const GET_USER = gql(`
query UserInfo($id: Int!){
    getUserById(
        id: $id
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

export  const LOGIN = gql(`
query($email: String!, $password: String!) {
  login(
  email: $email,
  password: $password
)}
`);

