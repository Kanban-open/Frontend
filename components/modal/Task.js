import {
    faClose,
    faEdit,
    faSave,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'components/general/dropdown';
import React from 'react';
import styled from 'styled-components';
import { Modal } from '.';
import { Checkbox } from 'components/general/checkbox';

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

const Action = styled.figure`
    cursor: pointer;
`;

const Actions = styled.div`
    position: absolute;
    right: 24px;
    background: var(--black-bg);
    padding: 6px 12px;
    border-radius: 8px;
    ul {
        display: grid;
        row-gap: 6px;
    }
    li {
        cursor: pointer;
        list-style: none;
        font: var(--heading-s);
        color: #fff;
        display: flex;
        column-gap: 8px;
        align-items: center;
        padding: 2px 0;
    }
    li:hover {
        background-color: #0e0e13;
        margin: 0 -12px;
        padding: 2px 12px;
    }
`;

const SubtaskModal = ({ title, children, status, subtasks, openModalProp }) => {
    let complete = subtasks.filter(
        (subtask) => subtask.complete === true
    ).length;
    let [open, setOpen] = React.useState(false);
    let [edit, setEdit] = React.useState(false);
    let [openModal, setOpenModal] = React.useState(openModalProp || false);

    const onEdit = () => {
        setOpen(!open);
        setEdit(!edit);
    };

    const onClose = () => {
        setOpen(false);
        setOpenModal(false);
    };

    return (
        <Modal
            title={title}
            Action={() => (
                <Action onClick={() => setOpen(true)}>
                    <img
                        src="/assets/icons/icon-vertical-ellipsis.svg"
                        alt=""
                    />
                </Action>
            )}
            editable={edit}
            display={openModal}
        >
            {open && (
                <Actions>
                    <ul>
                        <li onClick={onClose}>
                            Cerrar
                            <FontAwesomeIcon icon={faClose} size="lg" />
                        </li>
                        <li onClick={onEdit}>
                            {(!edit && (
                                <React.Fragment>
                                    Editar
                                    <FontAwesomeIcon icon={faEdit} />
                                </React.Fragment>
                            )) || (
                                <React.Fragment>
                                    Guardar
                                    <FontAwesomeIcon icon={faSave} />
                                </React.Fragment>
                            )}
                        </li>
                        <li>
                            Eliminar
                            <FontAwesomeIcon icon={faTrash} />
                        </li>
                    </ul>
                </Actions>
            )}
            <Description
                contentEditable={edit}
                suppressContentEditableWarning={edit}
            >
                {children}
            </Description>

            <SubtaskTitle>
                Subtareas ({complete} de {subtasks.length}){' '}
            </SubtaskTitle>
            <ContentSubtask>
                {subtasks.map((subtask, key) => (
                    <Checkbox completed={subtask.complete || false} key={key}>
                        {subtask.description}
                    </Checkbox>
                ))}
            </ContentSubtask>
            <ContentSubtask>
                <SubtaskTitle>Estatus</SubtaskTitle>
                <Dropdown selections={status} />
            </ContentSubtask>
        </Modal>
    );
};

export { SubtaskModal };
