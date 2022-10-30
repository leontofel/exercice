import { Input, Container, Heading, Button, Text, Spinner } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
//import { useLogin } from '../../hooks/useLogin';
import { useEffect, useState } from 'react';
import { ApolloError, useQuery, gql } from '@apollo/client';
import { token } from '../../state/atom';
import { LOGIN } from '../../GraphQL/Queries';
import { Query } from '../../hooks/graphql';
import { useRecoilState, useRecoilValue } from 'recoil';




export type LoginData = {
    email: string;
    password: string;
};


export default function LoginDisplay() {
    //state
    const [newToken, setNewToken] = useRecoilState(token);

    const [logData, setLogData] = useState<LoginData>();
    const navigate = useNavigate();
    let incorrectLogin = false;
    
    const { error, loading, data } = useQuery<Query>(LOGIN, {
        variables: {
            "email": logData?.email,
            "password": logData?.password
        }
    });

    //React Hook Forms
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<LoginData>();
    const onSubmit = handleSubmit(res => {
        setLogData(res);
        if (data !== undefined) setNewToken(data["login"]);
        navigate('/dashboard');

    });

    useEffect(() => {

    }, [logData])


    //if(error) return <Text>{error.message}</Text>;
    if (loading) return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' margin="0 auto" />;

    return (
        <>

            <Container display="flex" flexDirection="column" >
                <Heading alignSelf="center" marginLeft="6rem" marginTop="3rem" width="232px" height="56px" color="#2938C0">LeadUp</Heading>

                <Container display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="8rem">
                    <Heading>Sign-in</Heading>
                    <br />
                    <form onSubmit={onSubmit} >

                        <Input
                            type="email"
                            margin=".5rem 6rem"
                            width="200px"
                            placeholder="E-mail"
                            {...register("email", { required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/ })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email?.type === 'required' && <p role="alert">Email required</p>}
                        <br />
                        <Input
                            type="password"
                            margin=".5rem 6rem"
                            width="200px"
                            placeholder="Password"
                            {...register("password", { required: true })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password?.type === 'required' && <p role="alert">Password required</p>}
                        <br />
                        <Button
                            margin=".5rem 10rem"

                            colorScheme='purple'
                            type="submit">
                            Sign In
                        </Button>
                    </form>
                    {incorrectLogin && <Text color="red"><b>Senha ou email incorretos</b></Text>}
                    <Text textAlign="center" margin=".5rem" >don't have an account yet?</Text>
                    <Button margin=".5rem" colorScheme='gray' as={Link} to="/register">Create an account</Button>
                </Container>
            </Container>
        </>
    );
}

