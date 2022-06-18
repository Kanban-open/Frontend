import React from 'react';
import styled from 'styled-components';

const CardComponent = styled.div`
    background: var(--dark-grey);
    border-radius: 8px;
    padding: 16px 24px;
    display: grid;
    width: 100%;
    box-shadow: 0px 4px 6px 0px #364e7e1a;
`;
const Title = styled.p`
    color: var(--white);
    font: var(--heading-m);
`;
const Subtask = styled.span`
    color: var(--medium);
    font: var(--body-m);
`;

const Card = ({ title, subtaskFinish, subtask }) => {
    return (
        <CardComponent className="rs-8">
            <Title>{title}</Title>
            <Subtask>
                {subtask} de {subtaskFinish} subtareas
            </Subtask>
        </CardComponent>
    );
};

export { Card };
