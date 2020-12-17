import styled from 'styled-components/macro';

export const Container = styled.nav`
    width: 300px;
    padding: 12px;
    padding-top: 2rem;
    background-color: #f9f9f9;
    border-right: 1px solid rgba(3,3,3,.12);
`;

export const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Title = styled.h3`
    font-weight: 400;
    font-size: 14px;
    margin-top: ${props => props.marginTop};
`;

export const Form = styled.form`
    width: 100%;
`;

export const Field = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Control = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 8px;
`;


export const Input = styled.input`
    color: #222;
    width: 100%;
    padding: 12px;
    outline: none;
    border-radius: 3px;
    border: 1px solid rgba(3,3,3, .12);
    font-size: 14px;
    font-weight: 300;
    margin-top: 4px;

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
    color: #333;
    opacity: .8;

    &:hover{
        opacity: .6;
    }
`;

export const SubmitButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 700;
    color: #4361ee;

    &:hover{
        opacity: .6;
    }
`;

export const TagContainer = styled.div`
    margin-top: 4px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    & > button {
        margin-top: 12px;
        margin-right: 12px;
    }
   
`;
