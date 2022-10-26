import { Button, Container, Text, Heading, List } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function EditUserDisplay() {

    return (
        <>
                <Container minHeight="50vh" display="flex" flexDirection="column" alignItems="space-between" justifyContent="center" marginTop="8rem">
                    <Heading>Hello, {}</Heading>
                    <Text>Edit your profile</Text>
                    <List>

                    </List>
                    <Link to="/dashboard">Go Back</Link>
                    <Button margin=".5rem" colorScheme='green'>Save changes</Button>
                </Container>            
        </>
    );
}