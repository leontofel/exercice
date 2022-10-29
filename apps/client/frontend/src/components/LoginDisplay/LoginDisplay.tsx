import { Input, Container, Heading, Button, Text, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
//import { useLogin } from '../../hooks/useLogin';
import { useEffect, useState } from 'react';
import { ApolloError, useQuery, gql } from '@apollo/client';
import { token } from '../../state/atom';


type LoginData = {
    email: string;
    password: string;
};

export default function LoginDisplay() {
    //React Hook Forms
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<LoginData>();
    const onSubmit = handleSubmit(data => setLogData(data));

    const [logData, setLogData] = useState<LoginData>()

    useEffect(() => {

        
    }, [logData])

    
    
        const LOGIN = gql`
        query {
        login(
        email: ${logData?.email}
        password: ${logData?.password}
        ){
            token
        }}
`;

    const { error, loading, data } = useQuery<string>(LOGIN)




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
                    {loading && <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    margin="0 auto"
                />}
                {error && <Text>{error.message}</Text>}
                    <Text textAlign="center" margin=".5rem" >don't have an account yet?</Text>
                    <Button margin=".5rem" colorScheme='gray' as={Link} to="/register">Create an account</Button>
                </Container>
            </Container>
        </>
    );
}

function useRecoilState(token: any): [any, any] {
    throw new Error('Function not implemented.');
}
