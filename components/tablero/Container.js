import React from 'react';

const Container = ({ children }) => {
    return (
        <section className="d-g rs-24">
            {children}
            <style jsx>{`
                section {
                    width: 280px;
                }
            `}</style>
        </section>
    );
};

export { Container };
