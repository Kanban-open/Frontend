import React from 'react';
import styled from 'styled-components';

const Content = styled.article`
    display: grid;
    width: 280px;
`;

const ContentCard = ({ children }) => {
    return <Content className="rs-16">{children}</Content>;
};

export { ContentCard };
