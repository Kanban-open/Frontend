import { Primary } from 'components/general/buttons';
import React from 'react';
import styled from 'styled-components';
import add from '/public/assets/icons/icon-add-task-mobile.svg';

const Add = styled.span`
    img {
        width: 12px;
        height: 12px;
    }
`;
const NoContent = styled.section`
    height: calc(100vh - 60px);
    width: 100vw;
    display: grid;
    place-content: center;
    p {
        font: var(--heading-l);
        color: var(--medium);
    }
`;

const Index = () => {
    return (
        <NoContent className="rs-24">
            <p>
                Este tablero esta vacio. Crea una nueva columna para comenzar.
            </p>
            <Primary>
                <Add>
                    <img src={add.src} alt="" />
                </Add>
                Agregar una nueva columna
            </Primary>
        </NoContent>
    );
};

export default Index;
