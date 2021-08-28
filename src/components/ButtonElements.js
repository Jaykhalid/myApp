import styled from 'styled-components'
import {Link} from 'react-scroll'


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) =>  (primary ? '#008080' : '#010606')};
    background: ${({secondary}) =>  (secondary ? '#008080' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#00EAD7')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 2px solid #008080;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) =>  (primary ? '#010606' : '#008080')};
        background: ${({secondary}) =>  (secondary ? '#fff' : '#008080')};
        color: ${({dark}) => (dark ? '#fff' : '#008080')};
        color: ${({white}) => (white ? '#008080' : '#fff')};

    } 
`;