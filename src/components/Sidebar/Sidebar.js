import React, {useState} from 'react';
import {Container, Inner, Title, Form, Field, Input, Control, SubmitButton, ResetButton, TagContainer} from './Sidebar.style';
import Tag from '../Tag';
import {charityData} from '../../charityData';

export default function Sidebar() {
    const [nameFilter, setNameFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    const allCategories = Array.from(new Set(charityData.map(data => data.category)));

    return (
        <Container>
           <Inner>
            <Title marginTop="0rem">
                Search by name
            </Title>
            <Form>
                <Field>
                    <Input 
                        value={nameFilter}
                        name="search"
                        onChange={(e) => setNameFilter(e.target.value)}
                        placeholder="Name of charity"
                    />
                </Field>
                <Field>
                    <Control>
                        <SubmitButton>Search</SubmitButton>
                        <ResetButton>Reset</ResetButton>
                    </Control>
                </Field>
            </Form>
            <Title marginTop="2rem">
                Search by category
            </Title>
            <TagContainer>
                {allCategories.map((category, index) => (
                    <Tag key={`category_${index}`}>{category}</Tag>
                ))}
            </TagContainer>
           </Inner>
        </Container>
    )
}
