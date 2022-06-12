import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 8px 64px;
    border-radius: 40px;
    outline: none;
    border: none;
    color: #fff;
`;

const ButtonPrimary = styled(Button)`
    padding: 10px 64px;
    background: var(--violet);
    font: var(--heading-m);
`;

const ButtonPrimarySmall = styled(Button)`
    font: var(--body-l);
    background: var(--violet);
`;

const ButtonSecundary = styled(ButtonPrimarySmall)`
    background: #efeff9;
    color: var(--violet);
    font-weight: bold;
`;

const Primary = ({ children }) => {
    return <ButtonPrimary>{children}</ButtonPrimary>;
};

export { Primary };
