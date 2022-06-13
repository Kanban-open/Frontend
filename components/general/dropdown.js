import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    outline: none;
    border: 2px solid ${(props) => (props.error && 'var(--red)') || '#828fa340'};
    border-radius: 4px;
    padding: 8px 16px;
    width: 100%;
    font: var(--body-l);
    color: var(--white);
    @media (prefers-color-scheme: dark) {
        background: var(--dark-grey);
    }
`;

const Dropdown = () => {
    return (
        <Select>
            <option value="">Hola</option>
        </Select>
    );
};

export { Dropdown };
