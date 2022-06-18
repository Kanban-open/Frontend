import {
    Primary,
    PrimarySmall,
    Secundary,
    Destructive,
} from 'components/general/buttons';
import { Checkbox } from 'components/general/checkbox';
import { Dropdown } from 'components/general/dropdown';
import { TextField } from 'components/general/textField';
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
            <Dropdown></Dropdown>
        </React.Fragment>
    );
};

export default Home;
