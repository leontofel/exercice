import { gql } from '@apollo/client';

export const REGISTER = gql`
    mutation Register($email: String!, $password: String!, $name:String!, $city: String!, $pet: String!, $tech_stack: String!, $married: Boolean!, $birthday: DateTime!) {
        createUser(NewUserInput: {email: $email, password: $password, name: $name, city: $city, pet: $pet, tech_stack: $tech_stack, married: $married, birthday: $birthday})
      
        }
    
`;

export const UPDATE_USER = gql`
    mutation updateUser($id: Int!, $name: String!, $city:String!, $tech_stack:String!, $married:Boolean!, $birthday:DateTime!,$pet:String!){
        updateUser(updateInput: {id: $id, tech_stack:$tech_stack,name: $name, city: $city, pet: $pet, birthday: $birthday, married: $married}) {
        name,
    }
  }
`; 