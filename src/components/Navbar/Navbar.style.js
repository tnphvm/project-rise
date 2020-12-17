import styled from 'styled-components/macro';

export const Container = styled.nav`
    width: 100%;
    padding: 1.5rem 0rem;
    background-color: #fff;
    border-bottom: 1px solid rgba(3,3,3,.12);
`;

export const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
`;

export const Brand = styled.div`
    width: 85px;
    height: 55px;
    transform: skew(-8deg);
    background-color: rgb(0, 48, 73);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 0;
`;

export const SubTitle = styled.span`
    font-size: 12px;
    font-weight: 400;
    opacity: .6;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 12px;

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

