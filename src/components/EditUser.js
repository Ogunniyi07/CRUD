import React, {useState, useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { v5 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom'
//useNavigate is to return to home after submitting the form, formerly useHistory is lower react version

export const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState ({
    id: '',
    name: ''
  });
  const { users, editUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  //Catch the id of the page 
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId; 
    const selectedUser = users.find(user => user.id === Number(userId))
    setSelectedUser(selectedUser)
  }, [currentUserId, users])

  const onSubmit = () => {
    
    navigate('/');
  }

  const onChange = (e) => {
    
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <label>Name</label>
        <Input type="text"  value={setSelectedUser} onChange={onChange} placeholder="Edit Name"></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger " style={{marginLeft:"12px" }}>Cancel</Link>
    </Form>
  )
}
