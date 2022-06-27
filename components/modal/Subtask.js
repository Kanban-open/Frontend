import { Dropdown } from 'components/general/dropdown';
import React from 'react';
import styled from 'styled-components';
import { Modal } from '.';

const Description = styled.p`
    font: var(--body-l);
    color: var(--medium);
`;
const SubtaskTitle = styled.p`
    font: var(--heading-s);
`;
const ContentSubtask = styled.div`
    display: grid;
    row-gap: 8px;
`;

const Subtask = ({ title, children, Subtask, status }) => {
    return (
        <Modal
            title={title}
            Action={() => (
                <figure>
                    <img
                        src="/assets/icons/icon-vertical-ellipsis.svg"
                        alt=""
                    />
                </figure>
            )}
        >
            <Description>{children}</Description>
            <SubtaskTitle>Subtareas (2 de 3)</SubtaskTitle>
            <ContentSubtask>
                <Subtask />
            </ContentSubtask>
            <ContentSubtask>
                <SubtaskTitle>Estatus</SubtaskTitle>
                <Dropdown selections={status} />
            </ContentSubtask>
        </Modal>
    );
};

export { Subtask };
