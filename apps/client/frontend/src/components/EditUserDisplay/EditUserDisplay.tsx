import { Button, Container, Text, Heading, UnorderedList, ListItem, Input } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { token } from "../../state/atom";
import { useVerifyToken } from "../../hooks/useVerifyToken";
import { useForm } from "react-hook-form";
import IUser from "../../types/IUser";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER } from "../../GraphQL/Mutations";
import { GET_USER } from "../../GraphQL/Queries";
import { useTokenId } from "../../hooks/useTokenId";


export default function EditUserDisplay() {
    //verify token 
    /*
    const navigate = useNavigate();
    const [tokenValue, ] = useRecoilValue(token);
    const tokenIsValid = useVerifyToken(tokenValue);
    useEffect(() => {
        if (tokenIsValid !== true){
            alert("user must login to access this page.");
            navigate('/');
        }
    }, [navigate, token, tokenIsValid]);
    */

    //get id
    const id = 1;
    
    

    //React Hook Forms
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<IUser>();
    const onSubmit = handleSubmit(data => handleMutation(data));

    function handleMutation(data: IUser) {
        useMutation(UPDATE_USER, {
            variables: {
                "id": id,
                "birthday": data.birthday,
                "city": data.city,
                "married": data.married,
                "name": data.name,
                "pet": data.pet,
                "tech_stack": data.tech_stack
            }
        })
    }

    const { error, loading, data } = useQuery(GET_USER, { variables: {
        "id": id
    }});

    return (
        <>
            <Container minHeight="100vh" display="flex" flexDirection="column" alignItems="space-between" justifyContent="center" marginTop="8rem">
                <Heading>Hello, { data?.name !== undefined ? data?.name : " " }</Heading>
                <Text>Edit your profile</Text>
                <UnorderedList>
                    <form onSubmit={onSubmit}>
                        <ListItem>Name: { data?.name !== undefined ? data?.name : " " }</ListItem>
                        <Input marginBottom="1rem" {...register("name")} />
                        <br />
                        <ListItem>City: { data?.city !== undefined ? data?.city : " " }</ListItem>
                        <Input marginBottom="1rem" {...register("city")} />
                        <br />
                        <ListItem>Pet: { data?.pet !== undefined ? data?.pet : " " }</ListItem>
                        <Input marginBottom="1rem" {...register("pet")} />
                        <br />
                        <ListItem>Tech-Stack: { data?.tech_stack !== undefined ? data?.tech_stack : " " }</ListItem>
                        <Input marginBottom="1rem" {...register("tech_stack")} />
                        <br />
                        <ListItem>Married: </ListItem>
                        <input type="checkbox" {...register("married")} />
                        <br />
                        <ListItem marginTop=".5rem" >Birthday: { data?.birthday !== undefined ? data?.birthday.toString() : " "}</ListItem>
                        <Input marginBottom="1rem" type="date" {...register("birthday")} />
                        <br />
                        <Button type="submit" margin=".5rem" colorScheme='green'>Save changes</Button>
                    </form>
                </UnorderedList>
                <br />
                <Link to="/dashboard"><b>Go Back</b></Link>
            </Container>
        </>
    );
}