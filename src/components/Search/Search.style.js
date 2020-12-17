import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #222;
`;

export const FormWrapper = styled.div`
    width: 80%;
    margin-right: auto;
`;

export const Form = styled.form`
`;

export const Field = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Title = styled.h3`
    font-weight: 400;
    font-size: 14px;
`;

export const Input = styled.input`
    color: #222;
    width: 80%;
    padding: 12px;
    outline: none;
    border-radius: 15px;
    border: 1px solid rgba(1,1,1, .05);
    font-size: 14px;
    font-weight: 300;

    &:hover, &:focus, &:active{
        border: 1px solid rgba(1,1,1, .15);
    }
`;

export const ResetButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 5px;
    font-size: 14px;
    font-weight: 700;
    color: #4361ee;

    &:hover{
        opacity: .6;
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 0;
    left: 80%;
    height: 100%;
    width: 20%;
    border: none;
    font-weight: 400;
    font-size: 14px;
`;

export const TagContainer = styled.div`
    margin-top: 12px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    & > button {
        margin-top: 12px;
        margin-right: 12px;
    }
   
`;
