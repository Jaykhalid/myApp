import styled from 'styled-components'
import {Link} from 'react-router-dom'





export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(1, 147, 77, 1) 0%,
        rgba(10, 100, 122, 1) 100%
    );
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 40px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    font-size: 32px;
    color: #fff;
    font-weight: 700;
    text-decoration: none;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 72px;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    margin: 0 auto;
    display: grid;
    z-index: 1;
    width: 100%;
    height: auto;
    padding: 50px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 50px;
    color: #fff;
    font-size 20px;
    font-weight 400;
    text-align: center;
`

export const FormLabel = styled.label`
    color: #fff;
    font-size: 14px;
    margin-bottom: 8px;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #1EAE98;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #010101;
    font-size: 20px;
    cursor: pointer;
`;

export const Menu = styled.div`
    text-align: center;
    margin-top: 27px;
    color: #fff;
    font-size: 14px;
`;

export const Text = styled.div`
    text-align: center;
    margin-top: 7px;
`