import {
    Primary,
    PrimarySmall,
    Secundary,
    Destructive,
} from 'components/general/buttons';
import { Checkbox } from 'components/general/checkbox';
import { Dropdown } from 'components/general/dropdown';
import { TextField } from 'components/general/textField';
import { SubtaskModal } from 'components/modal/Task';
import React from 'react';

const Home = () => {
    let subtasks = [
        {
            description: 'Research competitor pricing and business models',
            complete: true,
        },
        { description: 'Outline a business model that works for our solution' },
        { description: 'Surveying and testing' },
    ];

    return (
        <React.Fragment>
            <Primary>Hola</Primary>
            <PrimarySmall>Hola</PrimarySmall>
            <Secundary>Hola</Secundary>
            <Destructive>Hola</Destructive>
            <Checkbox>Idle</Checkbox>
            <TextField placeholder="hola" />
            <TextField placeholder="hola" error="Can’t be empty" />
            <Dropdown selections={['Doing', 'todo']}></Dropdown>
            <SubtaskModal
                title="Research pricing points of various competitors and trial different business models"
                status={['Doing', 'Important']}
                subtasks={subtasks}
                openModalProp={true}
            >
                We know what we're planning to build for version one. Now we
                need to finalise the first pricing model we'll use. Keep
                iterating the subtasks until we have a coherent proposition.
            </SubtaskModal>
        </React.Fragment>
    );
};

export default Home;
