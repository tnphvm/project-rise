import React, {useState} from 'react';
import {Container, FormWrapper, Title, Form, Input, Field, ResetButton, TagContainer} from './Search.style';
import Tag from '../Tag';
import {charityData} from '../../charityData';

export default function Search() {
    const [nameFilter, setNameFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    const allCategories = Array.from(new Set(charityData.map(data => data.category)));
    console.log(allCategories)

    return (
        <Container>
            <FormWrapper>
                <Title>
                    Search by name or category
                </Title>
                <Form>
                    <Field>
                        <Input 
                            value={nameFilter}
                            name="search"
                            onChange={(e) => setNameFilter(e.target.value)}
                            placeholder="Name of charity"
                        />
                        <ResetButton>Reset</ResetButton>
                    </Field>
                </Form>
                <TagContainer>
                    {allCategories.map((category, index) => (
                        <Tag key={`category_${index}`}>{category}</Tag>
                    ))}
                </TagContainer>
            </FormWrapper>
        </Container>
    )
}
