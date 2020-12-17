import React from 'react';
import { MDBContainer } from "mdbreact";
import {Container, Inner, Brand, BrandImage, SearchWrapper} from './Navbar.style';
import Search from '../Search';
import Logo from './Rise.png';

export default function Navbar() {
    return (
        <Container>
            <MDBContainer size="xl" >
                <Inner>
                    <Brand>
                        <BrandImage src={Logo} />
                    </Brand>
                    <SearchWrapper>
                        <Search />
                    </SearchWrapper>
                   
                </Inner>
            </MDBContainer>
        </Container>
    )
}
