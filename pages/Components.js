import {
    Primary,
    PrimarySmall,
    Secundary,
    Destructive,
} from 'components/general/buttons';
import { Checkbox } from 'components/general/checkbox';
import { Dropdown } from 'components/general/dropdown';
import { TextField } from 'components/general/textField';
import { Subtask } from 'components/modal/Subtask';
import React from 'react';

const Home = () => {
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
            <Subtask
                title="Research pricing points of various competitors and trial different business models"
                Subtask={() => [
                    <Checkbox completed={true}>
                        Research competitor pricing and business models
                    </Checkbox>,
                    <Checkbox>
                        Outline a business model that works for our solution
                    </Checkbox>,
                    <Checkbox>Surveying and testing</Checkbox>,
                ]}
                status={['Doing', 'Important']}
            >
                We know what we're planning to build for version one. Now we
                need to finalise the first pricing model we'll use. Keep
                iterating the subtasks until we have a coherent proposition.
            </Subtask>
        </React.Fragment>
    );
};

export default Home;
