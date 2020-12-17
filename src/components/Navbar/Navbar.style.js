import styled from 'styled-components/macro';

export const Container = styled.nav`
    width: 100%;
    padding: 4rem 4rem;
    background-color: #f8f9fa;
    position: relative;
`;

export const Inner = styled.div`
    width: 100%;
    height: 100%;
`;

export const Brand = styled.div`
    width: 85px;
    height: 55px;
    position: absolute;
    top: 25%;
    left: 2%;
    transform: translateY(-50%) skew(-8deg);
    background-color: rgb(0, 48, 73);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const BrandImage = styled.img`
    width: 70px;
    height: 45px;
    transform:  skew(8deg);
`;

export const SearchWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
`;

