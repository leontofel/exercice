import { Input, Container, Heading, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

type LoginData = {
    email: string;
    password: string;
};

export default function LoginDisplay() {



    const { register, setValue, handleSubmit, formState: { errors } } = useForm<LoginData>();
    const onSubmit = handleSubmit(data => console.log(data));

    function handleLogin() {

        axios.post('http://localhost:3006', {})
            .then()
            .catch(err => console.error(err));
    }

    return (
        <>
            <Container display="flex" >
                <Container display="flex" flexDirection="column" alignItems="space-between" justifyContent="center" marginTop="8rem">
                    <Heading>Sign-in</Heading>
                    <form onSubmit={onSubmit}>

                        <Input
                            type="email"
                            margin=".5rem"
                            width="25vw"
                            placeholder="E-mail"
                            {...register("email", { required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/ })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email?.type === 'required' && <p role="alert">Email required</p>}
                        <Input
                            type="password"
                            margin=".5rem"
                            width="25vw"
                            placeholder="Password"
                            {...register("password", { required: true })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password?.type === 'required' && <p role="alert">Password required</p>}
                        <Button
                            margin=".5rem"
                            colorScheme='purple'
                            type="submit">
                            Sign In
                        </Button>
                    </form>
                    <Text textAlign="center" margin=".5rem" >don't have an account yet?</Text>
                    <Button margin=".5rem" colorScheme='gray' as={Link} to="/register">Create an account</Button>
                </Container>
                <Heading marginTop="10rem" marginLeft="8rem" width="232px" height="56px" color="#2938C0">LeadUp</Heading>
            </Container>
        </>
    );
}