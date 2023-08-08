import { styled } from "styled-components";

export const Button = styled.button`
    border: none;
    outline: none;
    background-color: teal;
    padding: 0.5rem 0.8rem;
    transition: all 0.7s;

    .hero-btn{
        text-decoration: none;
        color: white;
    }
    &:hover{
        .hero-btn{
            color: teal;
        }
        background-color: ${({theme}) => theme.colors.black};;
    }

`