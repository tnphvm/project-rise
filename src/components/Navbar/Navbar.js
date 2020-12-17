import React from 'react';
import { MDBContainer } from "mdbreact";
import {Container, Inner, Brand, BrandImage, Title, SubTitle, Header} from './Navbar.style';
import Search from '../Search';
import Logo from './Rise.png';

export default function Navbar() {
    return (
        <Container>
            <MDBContainer fluid>
                <Inner>
                    <Brand>
                        <BrandImage src={Logo} />
                    </Brand>
                    <Header>
                        <Title>
                        Charity Organization Directory
                        </Title>
                        <SubTitle>
                        A continuously evolving directory of deserving charities
                        </SubTitle>
                    </Header>

                </Inner>
            </MDBContainer>
        </Container>
    )
}
