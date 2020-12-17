import styled from 'styled-components/macro';

export const Button = styled.button`
    background-color: rgba(118, 120, 237, .10);
    border-radius: 100px;
    padding: 10px;
    border: none;

    &:hover{
        opacity: .8;
    }
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: #333;
`;

export const RemoveButton = styled.button`
    font-size: 14px;
    border: none;
    outline: none;
    background-color: transparent;
    color: rgba(118, 120, 237, .85);
`;