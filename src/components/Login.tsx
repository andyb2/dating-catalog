import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../app/asyncRequest";

const Box = styled.div``

const Form = styled.form``

const Container = styled.div``

const UsernameTitle = styled.h2``

const Input = styled.input``

const PasswordTitle = styled.h2``

const SubmitButton = styled.button``

const Login = () => {
    const userRef = useRef<HTMLInputElement | null>(null);
    const pwRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch<any>();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const loginRequest = {
            username: userRef.current!.value,
            password: pwRef.current!.value,
        }
        dispatch(loginUser(loginRequest));
    }

    return (
        <Box>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Container>
                    <UsernameTitle>Username</UsernameTitle>
                    <Input ref={userRef}/>
                </Container>
                <Container>
                    <PasswordTitle>Password</PasswordTitle>
                    <Input ref={pwRef}/>
                </Container>
                <SubmitButton>Login</SubmitButton>
            </Form>
        </Box>
    )
}

export default Login