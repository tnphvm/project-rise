import React from 'react';
import {Button, Inner, Title, RemoveButton} from './Tag.style';

export default function Tag({children, onClick, isActive}) {
    return (
        <Button onClick={onClick} isActive={isActive}>
            <Inner>
                <Title>{children}</Title>
                <RemoveButton isActive={isActive}>
                    {isActive ? "✚" : "✖"}
                </RemoveButton>
            </Inner>
        </Button>
    )
}

Tag.defaultProps = {
    isActive: false
}