import React from 'react';
import styled from 'styled-components';

const Normal = styled.div`
    width: 100%;
    border-radius: 4px;
    position: relative;
    padding: 24px 12px;
    height: 20px;
    background: var(--light-bg);
    min-height: 40px;
    display: flex;
    align-items: center;
    transition: background-color 0.2s cubic-bezier(0, 0, 0.2, 1);

    & p {
        font: var(--heading-s);
        color: #000;
        padding-left: 32px;
        transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
    }
    &:hover {
        background-color: #39395b;
        transition: background-color 0.4s cubic-bezier(0, 0, 0.2, 1);
    }

    @media (prefers-color-scheme: dark) {
        background: var(--black-bg);
        & p {
            color: #fff;
        }
    }
`;
const CheckComponent = styled.div`
    display: flex;
    align-items: center;
    & div,
    & input[type='checkbox'] {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 2px;
    }
    & div {
        border: 1px solid #828fa3;
        background: var(--white);
    }
    & input[type='checkbox'] {
        z-index: 2;
        filter: opacity(0);
        cursor: pointer;
    }
    & input[type='checkbox']:checked {
        filter: opacity(1);
        accent-color: var(--violet);
    }
    & input[type='checkbox']:checked ~ p {
        color: #8f9095;
        text-decoration: line-through;
        transition: all 0.4s cubic-bezier(0, 0, 0.2, 1);
    }
`;

const CheckboxContainer = ({ children }) => {
    return (
        <CheckComponent>
            <input type="checkbox" />
            <div></div>
            <p>{children}</p>
        </CheckComponent>
    );
};

const Checkbox = ({ children }) => {
    return (
        <Normal>
            <CheckboxContainer>{children}</CheckboxContainer>
        </Normal>
    );
};

export { Checkbox };
