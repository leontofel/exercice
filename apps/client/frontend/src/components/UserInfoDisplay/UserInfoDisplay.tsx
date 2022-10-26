import { Button, Container, Text, Heading, List } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function UserInfoDisplay() {

    return (
        <>
                <Container minHeight="50vh" display="flex" flexDirection="column" alignItems="space-between" justifyContent="center" marginTop="8rem">
                    <Heading>Welcome, {}</Heading>
                    <Text>Checkout your profile</Text>
                    <List>

                    </List>
                    <Link to="/edit-user">edit profile</Link>
                    <Button margin=".5rem" colorScheme='red'>Logout</Button>
                </Container>            
        </>
    );
}