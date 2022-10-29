import { Button, Container, Text, Heading, UnorderedList, ListItem, Input } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { token } from "../../state/atom";
import { useVerifyToken } from "../../hooks/useVerifyToken";
import { useForm } from "react-hook-form";
import IUser from "../../types/IUser";

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

    //React Hook Forms
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<IUser>();
    const onSubmit = handleSubmit(data => console.log(data));
    
    


    return (
        <>
            <Container minHeight="100vh" display="flex" flexDirection="column" alignItems="space-between" justifyContent="center" marginTop="8rem">
                <Heading>Hello, { }</Heading>
                <Text>Edit your profile</Text>
                <UnorderedList>
                    <form onSubmit={onSubmit}>
                        <ListItem>Name: {}</ListItem>
                        <Input marginBottom="1rem" {...register("name")}/>
                        <br />
                        <ListItem>City: {}</ListItem>
                        <Input marginBottom="1rem" {...register("city")} />
                        <br />
                        <ListItem>Pet: {}</ListItem>
                        <Input marginBottom="1rem" {...register("pet")} />
                        <br />
                        <ListItem>Tech-Stack: {}</ListItem>
                        <Input marginBottom="1rem" {...register("tech_stack")}/>
                        <br />
                        <ListItem>Married: </ListItem>
                        <input type="checkbox" {...register("married")}/>
                        <br />
                        <ListItem marginTop=".5rem" >Birthday: {}</ListItem>
                        <Input marginBottom="1rem" type="date" {...register("birthday")}/>
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