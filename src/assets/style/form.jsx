import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #c6c6c6;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 50%;
    padding: .5rem 1rem;
    border-radius: 10px;
    background-color: #fff;
`;

export const Title = styled.h1`
    font-size: 26px;
    margin: 0;
`;

export const Div = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
`;

export const Input = styled.input`
    height: 26px;
`;

export const Space = styled.div`
    margin-bottom: .5rem;
`;

export const TextError = styled.p`
    color: red;
    font-size: 12px;
    margin: 3px 0 0 0;
`;


export const Button = styled.button`
    cursor: pointer;
    height: 32px;
    background-color: #0d0de3cf;
    color: #fff;
    border-radius: 5px;
    border: none;
    margin-top: 1rem;
`;

export const ButtonBack = styled.button`
    height: 32px;
    margin-top: 1rem;
    background-color: transparent;
    border: none;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        border: 1px solid #c6c6c6;
    }
`;

export const Loading = styled.p`
    font-size: 20px;
`;
