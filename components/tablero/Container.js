import React from 'react';

const Container = ({ children }) => {
    return (
        <section className="d-ig rs-24">
            {children}
            <style jsx>{`
                section {
                    width: 310px;
                    grid-template-rows: 16px auto;
                    height: calc(100vh - 84px);
                    overflow-y: scroll;
                    position: relative;
                }
                ::-webkit-scrollbar {
                    width: 8px;
                }

                ::-webkit-scrollbar-track {
                    background: transparent;
                }

                ::-webkit-scrollbar-thumb {
                    background: #2c2c38;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #3f3f47;
                }
            `}</style>
        </section>
    );
};

export { Container };
