import React from 'react';
import { Card } from './Card';
import { Container } from './Container';
import { ContentCard } from './ContentCard';
import { Title } from './Title';

const Tablero = ({ children }) => {
    return (
        <Container>
            <Title background="#49C4E5">Todo (4)</Title>
            <ContentCard>
                <Card
                    title="Construir una aplicación"
                    subtaskFinish="0"
                    subtask="3"
                />
            </ContentCard>
        </Container>
    );
};

export { Tablero };
