import React from 'react';
import styled from 'styled-components';
import icon from '/public/assets/icons/logo-mobile.svg';
import add from '/public/assets/icons/icon-add-task-mobile.svg';
import eclipse from '/public/assets/icons/icon-vertical-ellipsis.svg';
import down from '/public/assets/icons/icon-chevron-down.svg';

const HeaderComponent = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;
    background: var(--dark-grey);
`;

const IconHeader = styled.figure`
    width: 24px;
    height: 24px;
    & img {
        width: 24px;
        height: 24px;
    }
`;
const Add = styled.article`
    padding: 8px 16px;
    background: var(--violet);
    border-radius: 40px;
    img {
        width: 12px;
        height: 12px;
    }
`;
const SectionsComponent = styled.section`
    display: flex;
    justify-content: center;
    column-gap: 16px;
    align-items: center;
    & p {
        font: var(--heading-m);
    }
`;

const Header = () => {
    return (
        <HeaderComponent>
            <SectionsComponent>
                <IconHeader>
                    <img src={icon.src} alt="icon home" />
                </IconHeader>
                <div>
                    <p>Platform Launch</p>
                    <span>
                        <figure>
                            <img src={down.src} alt="" />
                        </figure>
                    </span>
                </div>
            </SectionsComponent>
            <SectionsComponent>
                <Add>
                    <img src={add.src} alt="add" className="center" />
                </Add>
                <figure>
                    <img src={eclipse.src} alt="" />
                </figure>
            </SectionsComponent>
            <style jsx>{`
                div {
                    display: inline-flex;
                    column-gap: 4px;
                }
            `}</style>
        </HeaderComponent>
    );
};

export { Header };
