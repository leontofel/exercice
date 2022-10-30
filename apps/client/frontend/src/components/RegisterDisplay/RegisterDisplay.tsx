import { Input, Container, Heading, Button, Text } from '@chakra-ui/react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { REGISTER } from '../../GraphQL/Mutations';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { token } from '../../state/atom';

type FormData = {
    email: string;
    password: string;
    confirmPassword: string;
    name: string,
    city: string,
    pet: string,
    techStack: string,
    married: boolean,
    birthday: string
};

export default function RegisterDisplay() {
    const [newToken, setNewToken] = useRecoilState(token);
    const navigate = useNavigate();

    const [user, setUser] = useState<FormData>()
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => handleRegister(data));


    function handleRegister(user: FormData) {
        const { email, password, confirmPassword, name, city, pet, techStack, married, birthday } = user
        if (password !== confirmPassword) {
            throw new Error("Password must match");
        }
        const data = useMutation(REGISTER, {
            variables:
            {
                "email": email,
                "password": password,
                "name": name,
                "city": city,
                "pet": pet,
                "tech_stack": techStack,
                "married": married,
                "birthday": birthday
            }
        })
        if (data) alert("usuário criado com sucesso");
        //setNewToken(data);
        navigate('/');

    }

    return (
        <>
            <Container display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Heading marginTop="4rem" justifySelf="flex-end" alignSelf="center" color="#2938C0">LeadUp</Heading>
                <Container display="flex" flexDirection="column" alignItems="center" justifyContent="center" flexWrap="wrap" marginTop="8rem">
                    <Heading>Create account</Heading>
                    <form onSubmit={onSubmit}>
                        <Input
                            type="email"
                            margin=".5rem"
                            width="200px"
                            placeholder="E-mail"
                            {...register("email", { required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/ })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email?.type === 'required' && <p role="alert">Email required</p>}
                        <br />
                        <Input
                            type="password"
                            margin=".5rem"
                            width="200px"
                            placeholder="Password"
                            {...register("password", { required: true, minLength: 6 })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password?.type === 'required' && <p role="alert">Password required and must have at least 6 digits</p>}
                        <br />
                        <Input
                            type="password"
                            margin=".5rem"
                            width="200px"
                            placeholder="Confirm password"
                            {...register("confirmPassword", { required: true, minLength: 6 })}
                            aria-invalid={errors.confirmPassword ? "true" : "false"}
                        />
                        {errors.confirmPassword?.type === 'required' && <p role="alert">Must confirm password</p>}
                        <br />
                        <Input
                            margin=".5rem"
                            width="200px"
                            placeholder="Name"
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name?.type === 'required' && <p role="alert">name is required</p>}
                        <br />
                        <Input
                            margin=".5rem"
                            width="200px"
                            placeholder="City"
                            {...register("city", { required: true })}
                            aria-invalid={errors.city ? "true" : "false"}
                        />
                        {errors.city?.type === 'required' && <p role="alert">city is required</p>}
                        <br />
                        <Input
                            margin=".5rem"
                            width="200px"
                            placeholder="Favorite Pet"
                            {...register("pet", { required: true })}
                            aria-invalid={errors.pet ? "true" : "false"}
                        />
                        {errors.pet?.type === 'required' && <p role="alert">pet is required</p>}
                        <br />
                        <Input
                            margin=".5rem"
                            width="200px"
                            placeholder="What's your favorite Tech-Stack?"
                            {...register("techStack", { required: true })}
                            aria-invalid={errors.techStack ? "true" : "false"}
                        />
                        {errors.techStack?.type === 'required' && <p role="alert">techStack required</p>}
                        <br />
                        <Text>Married</Text>
                        <input
                            type="checkbox"
                            {...register("married")}
                            aria-invalid={errors.married ? "true" : "false"}
                        />
                        {errors.married?.type === 'required' && <p role="alert">married required</p>}
                        <br />
                        <Input
                            type="date"
                            margin=".5rem"
                            width="200px"
                            placeholder="Birthday mm/dd/yyyy"
                            {...register("birthday", { required: true })}
                            aria-invalid={errors.birthday ? "true" : "false"}
                        />
                        {errors.birthday?.type === 'required' && <p role="alert">birthday required</p>}
                        <br />
                        <Button
                            margin=".5rem"
                            colorScheme='purple'
                            type="submit"
                        >
                            Create account
                        </Button>
                    </form>
                    <Text textAlign="center" margin=".5rem" > Already have an account?</Text>
                    <Button margin=".5rem" colorScheme='gray' as={Link} to="/">Login</Button>
                </Container>
            </Container>
        </>
    );
}