import styled from 'styled-components/macro';

export const Button = styled.button`
    ${props => props.isActive ? `
    background-color: rgba(42, 157, 143, .10);
    ` : `
    background-color: rgba(118, 120, 237, .10);
    `}

    border-radius: 100px;
    padding: 5px 8px;
    border: none;

    &:focus{
        outline: none;
    }

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

export const RemoveButton = styled.span`
    margin-left: 4px;
    display: inline-block;
    font-size: 12px;
    border: none;
    outline: none;
    background-color: transparent;

    &:focus{
        outline: none;
    }

    ${props => props.isActive ? `
    color: rgba(42, 157, 143, .85);
    ` : `
    color: rgba(118, 120, 237, .85);
    `}
    
`;