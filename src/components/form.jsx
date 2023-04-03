import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const UserForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)



    const handleClick = (e) => {
        e.preventDefault()
        if (isUpdated) {
            const oldState = [...allUsers];
            oldState[selectedIndex].email = email
            oldState[selectedIndex].password = password
            oldState[selectedIndex].Firstname = Firstname
            oldState[selectedIndex].Lastname = Lastname
            setAllUsers(oldState)
            setIsUpdated(false)
            setEmail('')
            setPassword('')
            setFirstname('')
            setLastname('')
            return;
        }
      
        const oldState = [...allUsers];
        oldState.push({
            email,
            password,
            Firstname,
            Lastname
        })
        setAllUsers(oldState)

    }
    const deleteData = (index) => {
        const oldState = [...allUsers];
        oldState.splice(Number(index), 1);
        setAllUsers(oldState)
    }
    const updateData = (index) => {
        setEmail(allUsers[index].email)
        setPassword(allUsers[index].password)
        setFirstname(allUsers[index].Firstname)
        setLastname(allUsers[index].Lastname)
        setIsUpdated(true)
        setSelectedIndex(index)
    }

 




    console.log(allUsers)


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Enter your Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
                    setEmail(e.target.value)
                }} value={email} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> Enter Your Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value)
                }} value={password} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Enter your First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First name" onChange={(e) => {
                    setFirstname(e.target.value)
                }} value={Firstname} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter your Last Name</Form.Label>
                <Form.Control type="last name" placeholder="Enter your Last name" onChange={(e) => {
                    setLastname(e.target.value)
                }} value={Lastname} />

            </Form.Group>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>

                    </tr>
                </thead>
                <tbody id="table-data">
                    {allUsers.map((el, index) => {
                        return <tr>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {el.email}
                            </td>
                            <td>
                                {el.password}
                            </td>
                            <td>
                                {el.Firstname}
                            </td>
                            <td>
                                {el.Lastname}
                            </td>
                            <td>
                                <button onClick={() => deleteData(index)} >Delete</button>
                            </td>
                            <td>
                                <button onClick={() => updateData(index)}>update</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Button onClick={handleClick} variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
    );
}

export default UserForm;