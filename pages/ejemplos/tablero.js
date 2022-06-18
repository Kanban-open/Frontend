import { Container } from 'components/tablero/Container';
import { Card } from 'components/tablero/Card';
import { ContentCard } from 'components/tablero/ContentCard';
import { Title } from 'components/tablero/Title';
import React from 'react';

const TableroEx = () => {
    return (
        <Container>
            <Title background="#49C4E5">Todo (4)</Title>
            <ContentCard>
                <Card
                    title="Construir una aplicación"
                    subtaskFinish="0"
                    subtask="3"
                />
                <Card
                    title="Construir una aplicación"
                    subtaskFinish="0"
                    subtask="3"
                />
            </ContentCard>
        </Container>
    );
};

export default TableroEx;
