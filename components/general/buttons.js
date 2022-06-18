import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 8px 64px;
    border-radius: 40px;
    outline: none;
    border: none;
    color: #fff;
    font: var(--body-l);
    font-weight: bold;
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
    &:hover {
        transition: all 0.4s cubic-bezier(0, 0, 0.2, 1);
        cursor: pointer;
    }
`;

const ButtonPrimary = styled(Button)`
    padding: 10px 64px;
    background: var(--violet);
    font: var(--heading-m);
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    &:hover {
        background: var(--soft-violtet);
    }
`;

const ButtonPrimarySmall = styled(Button)`
    font: var(--body-l);
    background: var(--violet);
    font-weight: bold;
    &:hover {
        background: var(--soft-violtet);
    }
`;

const ButtonSecundary = styled(ButtonPrimarySmall)`
    background: #efeff9;
    color: var(--violet);
    font-weight: bold;
    &:hover {
        background: #d8d7f1;
    }
`;

const ButtonDestructive = styled(Button)`
    background: var(--red);
    &:hover {
        background: var(--red-hover);
    }
`;

const Primary = ({ children }) => {
    return <ButtonPrimary>{children}</ButtonPrimary>;
};

const PrimarySmall = ({ children }) => {
    return <ButtonPrimarySmall>{children}</ButtonPrimarySmall>;
};
const Secundary = ({ children }) => {
    return <ButtonSecundary>{children}</ButtonSecundary>;
};

const Destructive = ({ children }) => {
    return <ButtonDestructive>{children}</ButtonDestructive>;
};

export { Primary, PrimarySmall, Secundary, Destructive };
