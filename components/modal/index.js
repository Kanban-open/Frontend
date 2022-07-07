import React from 'react';
import styled from 'styled-components';

const ModalComponent = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: ${(props) => props.openModal};
    place-items: center;
`;

const ModalContent = styled.article`
    background: var(--dark-grey);
    width: 90%;
    max-width: 480px;
    padding: 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    max-height: 70vh;
    overflow-y: auto;
    position: relative;
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #3f3f47;
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #3f3f47;
        border-radius: 8px;
    }
`;

const Title = styled.h5`
    font: var(--heading-l);
    color: #fff;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
    justify-content: space-between;
    h5 {
        width: 94%;
    }
`;

const Modal = ({ title, children, Action, editable, display }) => {
    return (
        <ModalComponent openModal={(display && 'grid') || 'none'}>
            <ModalContent>
                <TitleContainer>
                    <Title
                        contentEditable={editable}
                        suppressContentEditableWarning={editable}
                    >
                        {title}
                    </Title>
                    {Action && <Action />}
                </TitleContainer>
                {children}
            </ModalContent>
        </ModalComponent>
    );
};

export { Modal };
