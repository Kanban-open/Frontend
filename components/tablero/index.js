import React from 'react';
import { Container } from './Container';
import { ContentCard } from './ContentCard';
import { Title } from './Title';

const Tablero = ({ children }) => {
    return (
        <Container>
            <Title background="#49C4E5">Todo (4)</Title>
            <ContentCard>{children}</ContentCard>
        </Container>
    );
};

export { Tablero };
