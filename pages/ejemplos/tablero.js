import { Card } from 'components/tablero/Card';
import { Tablero } from 'components/tablero/Tablero';

import React from 'react';

const TableroEx = () => {
    return (
        <React.Fragment>
            <Tablero title={'todo'}>
                <Card
                    title="Construir una aplicación 2"
                    subtaskFinish="0"
                    subtask="3"
                />
                <Card
                    title="Construir una aplicación"
                    subtaskFinish="0"
                    subtask="3"
                />
                <Card
                    title="Construir una aplicación"
                    subtaskFinish="0"
                    subtask="3"
                />
                <Card
                    title="Construir una aplicación"
                    subtaskFinish="0"
                    subtask="3"
                />
                <Card
                    title="Construir una aplicación"
                    subtaskFinish="0"
                    subtask="3"
                />
                <Card
                    title="Construir una aplicación"
                    subtaskFinish="0"
                    subtask="3"
                />
                <Card
                    title="Construir una aplicación"
                    subtaskFinish="0"
                    subtask="3"
                />
            </Tablero>
        </React.Fragment>
    );
};

export default TableroEx;
