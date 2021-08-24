import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../context/GlobalState';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const EditUser = (props) => {

    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });

    const { users, editUser } = useContext(UserContext);

    const history = useHistory()

    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId);
        setSelectedUser(selectedUser);
      }, [currentUserId, users])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedUser({ ...selectedUser, [name]:value })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        editUser(selectedUser)

        history.push('/')
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Enter name" name="name" value={selectedUser.name} onChange={handleInputChange} required></Input>
            </FormGroup>
            <Button type="submit">Edit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default EditUser
