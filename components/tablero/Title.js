import React from 'react';
import styled from 'styled-components';

const Decoration = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${(props) => props.background || '#fff'};
`;
const Text = styled.p`
    color: var(--medium);
    font: var(--heading-s);
`;

const Title = ({ children, background }) => {
    return (
        <div className="d-f cs-8">
            <Decoration background={background} />
            <Text>{children}</Text>
        </div>
    );
};

export { Title };
