import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button} from 'reactstrap'

export const UserList = () => {
const { users, removeUser } = useContext(GlobalContext);
console.log(users);

  return (
    <ListGroup style={{ marginTop:"20px"}}>
        {users.map(user => (
            <ListGroupItem key={user.id} className='d-flex' style={{justifyContent:"space-between"}}>
            <strong>{user.name}</strong>
            <div className='ml-auto'>
                <Link className="btn btn-warning" style={{marginRight:"10px"}} to={`edit/${user.id}`}>Edit</Link>
                <Button onClick= {() => removeUser(user.id)} color="danger">Delete</Button>
            </div>
        </ListGroupItem>
        ))}
        
        
    </ListGroup>
  )
}
