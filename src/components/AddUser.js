import React, { useContext, useState } from 'react';
import { UserContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import { v4 as uuid } from 'uuid'

const AddUser = () => {

    const [name, setName] = useState('');

    const { addUser } = useContext(UserContext);

    const history = useHistory()

    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const newUser = {
            id: uuid(),
            name
        }

        addUser(newUser)

        history.push('/')
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Enter name" name="name" value={name} onChange={handleInputChange} required></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default AddUser
