import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Menu,
    Text
} from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'> JKhalid. </Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your credential</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Log in</FormButton>
                            <Menu>
                                <Text>Forgot Password</Text>
                                <Text>Sign up</Text>
                            </Menu> 
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>    
    );
};

export default SignIn;
