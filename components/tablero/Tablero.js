import React from 'react';
import { Container } from './Container';
import { ContentCard } from './ContentCard';
import { Title } from './Title';

const Tablero = ({ children, title }) => {
    return (
        <Container>
            <Title background="#49C4E5">{title}</Title>
            <ContentCard>{children}</ContentCard>
        </Container>
    );
};

export { Tablero };
