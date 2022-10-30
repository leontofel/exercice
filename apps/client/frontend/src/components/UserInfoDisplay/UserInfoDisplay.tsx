import { Button, Container, Text, Heading, Spinner, Avatar, UnorderedList, ListItem } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ApolloError, useQuery } from '@apollo/client';
import { GET_USER } from "../../GraphQL/Queries";
import IUser from "../../types/IUser";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { token } from '../../state/atom';
import { useVerifyToken } from "../../hooks/useVerifyToken";


export default function UserInfoDisplay() {
    //verify token
    /* 
     const navigate = useNavigate();
     const tokenValue = useRecoilValue(token);
     const tokenIsValid = useVerifyToken(tokenValue);
     useEffect(() => {
         if (tokenIsValid !== true){
             alert("user must login to access this page.");
             navigate('/');
         }
     }, [navigate, token, tokenIsValid]);
     */

    const id = 3;

    const { error, loading, data } = useQuery<IUser>(GET_USER, {
        variables: {
            "id": id
        }
    })

    useEffect(() => {

    }, [data])

    if (loading) return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' margin="0 auto" />;

    return (
        <>
            <Container minHeight="50vh" display="flex" flexDirection="column" alignItems="space-between" justifyContent="center" marginTop="8rem">
                <Heading>Welcome, {data?.name !== undefined ? data.name : " "}</Heading>
                <br />
                <Text>Checkout your profile</Text>
                <br />
                <br />
                {error && <Text>{error.message}</Text>}
                <br />
                {data &&
                    <UnorderedList>
                        <Avatar name={data!.name} src='https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg' />
                        <ListItem>Nome: {data!.name !== undefined ? data.name : " "}</ListItem>
                        <ListItem>Cidade: {data!.city}</ListItem>
                        <ListItem>Animal favorito: {data.pet}</ListItem>
                        <ListItem>Tecnologias favoritas: {data.tech_stack}</ListItem>
                        <ListItem>Casado: {data.married ? "Sim" : "Não"}</ListItem>
                        <ListItem>Aniversário: { }</ListItem>
                    </UnorderedList>}
                <br />
                <Link to="/edit-user"><b>Edit profile</b></Link>
                <br />
                <Button margin=".5rem" colorScheme='red'>Logout</Button>
            </Container>
        </>
    );
}