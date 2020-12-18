import React, {useState, useContext} from 'react';
import {Container, Inner, Title, Form, Field, Input, Control, ResetButton, TagContainer, TopContainer, IframeContainer} from './Sidebar.style';
import Tag from '../Tag';
import {charityData} from '../../charityData';
import { SearchContext } from '../../context/search.context';

export default function Sidebar() {
    const {titleFilter, categoryFilter} = useContext(SearchContext);
    const allCategories = Array.from(new Set(charityData.map(data => data.category)));

    const handleReset = async () => {
        await titleFilter.onChange('');
        await categoryFilter.onChange('');
    };

    const handleTitleFilter = (title) => {
        titleFilter.onChange(title);
    };

    const handleCategoryFilter = (category) => {
        categoryFilter.onChange(category);
    };

    return (
        <Container>
           <Inner>
                <TopContainer>
                    <Title marginTop="0rem">
                        Search by name
                    </Title>
                    <Form >
                        <Field>
                            <Input 
                                value={titleFilter.value}
                                name="search"
                                onChange={(e) => handleTitleFilter(e.target.value)}
                                placeholder="Name of charity"
                            />
                        </Field>
                        <Field>
                            <Control>
                                <ResetButton type="button" onClick={() => handleReset()}>Reset</ResetButton>
                            </Control>
                        </Field>
                    </Form>
                    <Title marginTop="2rem">
                        Search by category
                    </Title>
                    <TagContainer>
                        {allCategories.map((category, index) => (
                            <Tag 
                                key={`category_${index}`} 
                                onClick={() => handleCategoryFilter(category)} 
                                isActive={categoryFilter.value.includes(category)}
                            >
                                {category}
                            </Tag>
                        ))}
                    </TagContainer>
                </TopContainer>
                <IframeContainer>
                    <iframe 
                        id="emburseCards"
                        frameBorder="0"
                        src="https://app.emburse.com/c/1a24f815923c427abe4230cbbed29c5e"
                        style={{border: 'none', outline: 'none', width: '100%', height: '100%', padding: '-5rem'}}
                        ></iframe>
                </IframeContainer>
           </Inner>
        </Container>
    )
}
