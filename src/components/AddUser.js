import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { v5 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom'
//useNavigate is to return to home after submitting the form, formerly useHistory is lower react version

export const AddUser = () => {
  const [name, setName] = useState ('');
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    const newUser = {
      id: uuid,
      name: name
    }
    addUser(newUser);
    navigate('/');
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <label>Name</label>
        <Input type="text" value={name} onChange= {onChange} placeholder="Enter Name"></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger " style={{marginLeft:"12px" }}>Cancel</Link>
    </Form>
  )
}
