import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs(() => ({
    type: 'text',
}))`
    outline: none;
    border: 2px solid ${(props) => (props.error && 'var(--red)') || '#828fa340'};
    border-radius: 4px;
    padding: 8px 16px;
    width: 100%;
    font: var(--body-l);
    color: var(--white);
    &::placeholder {
        font: var(--body-l);
        color: #606169;
    }
    @media (prefers-color-scheme: dark) {
        background: var(--dark-grey);
    }
`;

const TextField = ({ placeholder, error }) => {
    return (
        <div>
            <Input placeholder={placeholder} error={error && true} />
            {error && <span>{error}</span>}
            <style jsx>{`
                div {
                    position: relative;
                }
                span {
                    position: absolute;
                    right: 16px;
                    color: var(--red);
                    font: var(--body-l);
                    top: calc(50% - 11.5px);
                }
            `}</style>
        </div>
    );
};

export { TextField };
