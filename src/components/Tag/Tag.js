import React from 'react';
import {Button, Inner, Title, RemoveButton} from './Tag.style';

export default function Tag({children, onClick, isActive}) {
    return (
        <Button onClick={onClick}>
            <Inner>
                <Title>{children}</Title>
                <RemoveButton>✖</RemoveButton>
            </Inner>
        </Button>
    )
}
