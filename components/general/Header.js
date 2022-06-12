import React from 'react';
import styled from 'styled-components';
import icon from '/public/assets/icons/logo-mobile.svg';

const HeaderComponent = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 24px 16px;
    align-items: center;
`;

const IconHeader = styled.figure`
    width: 24px;
    height: 24px;
    img {
        width: 24px;
        height: 24px;
    }
    p {
        font: var(--heading-m);
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

const Header = () => {
    return (
        <HeaderComponent>
            <section>
                <IconHeader>
                    <img src={icon.src} alt="icon home" />
                </IconHeader>
                <p>
                    Platform Launch
                    <span>
                        <figure>
                            <img src="" alt="" />
                        </figure>
                    </span>
                </p>
            </section>
            <section>
                <Add />
            </section>
            <style jsx>{`
                section {
                    display: flex;
                    justify-content: center;
                    column-gap: 16px;
                }
            `}</style>
        </HeaderComponent>
    );
};

export { Header };
