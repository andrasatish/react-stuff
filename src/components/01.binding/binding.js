import { useState } from "react";
import './binding.css';
import { Button } from 'antd';

function Binding() {
    //DECLARATIONS
    //FUNCTIONS
    //API CALLS
    //useState -> ReactHook
    const usersData = [
        { name: 'sudheer', location: 'hyderabad', id: 101 },
        { name: 'satish', location: 'delhi', id: 102 }
    ];
    const [title, setTitle] = useState('This is the first REACT APP');
    const [username, setUsername] = useState('Sudheer');
    const [make, setMake] = useState('Audi');
    const [usersList, setUsersList] = useState(usersData);
    const [person, setPerson] = useState({
        name: 'Sudheer',
        location: 'Hyderabad',
        address: {
            street: 'Kukatpally',
            area: {
                code: 9999,
                data: 'test'
            }
        }
    })


    const updateMake = () => {
        setMake('TATA');
    }

    const updatePerson = () => {
        const _address = person.address;
        Object.assign(_address, { street: 'Miyapur', area: { ...person.address.area, code: 7777 } });
        // setPerson({
        //     ...person,
        //     name:'Satish',
        //     location: 'Bangalore',
        //     address: _address  
        // })

        const updatePersonObj = {
            name: 'Satish',
            location: 'Bangalore',
            address: _address
        }
        setPerson({
            ...person,
            ...updatePersonObj
        })
    }

    const updatePersonDetails = (user) => {
        console.log('selected user', user);
        if(user.id === 101){
            const _usersList = usersList;
            const userIndex = _usersList.findIndex(eachUser => eachUser.id === user.id);
            const updatedUser = {
                name: 'John',
                location: 'Chennai',
                id: user.id
            }
            _usersList.splice(userIndex,1,updatedUser);
            console.log('user list', _usersList)
            setUsersList(_usersList);
            // setUsersList
        }
        if(user.id === 102){

        }
    }

    return (
        <div className="binding-wrapper">
            {/* update string value */}
            <h1>{title}</h1>
            <p>Username : {username}</p>
            <p>Car : <span className="text-bold">{make}</span></p>

            <button className="btn" onClick={updateMake}>update car</button>

            <hr />


            {/* Iteration map and maintain unqiue key */}
            <table className="users-wrapper">
                <thead>
                    <tr className="users-tr">
                        <th className="users-td">Name</th>
                        <th className="users-td">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersList.map((user) => {
                            return (
                                <tr className="users-tr" key={user.id}>
                                    <td className="users-td">{user.name}</td>
                                    <td className="users-td">{user.location}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


            <hr />

            {/* update object values */}
            <div className="person-wrapper">
                <h1 className="person-title">Update Person Data with object</h1>
                <ul className="person-details">
                    <li className="person-item">Name : {person.name}</li>
                    <li className="person-item">Location : {person.location}</li>
                    <li className="person-item">Street : {person.address.street}</li>
                    <li className="person-item">Area Code : {person.address.area.code}</li>
                </ul>
                <Button type="primary" onClick={updatePerson} className="action-btn">Update Person Details</Button>
            </div>


            <hr/>
            {/* update array values */}
            <table className="users-wrapper">
                <thead>
                    <tr className="users-tr">
                        <th className="users-td">Name</th>
                        <th className="users-td">Location</th>
                        <th className="users-td">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersList.map((user) => {
                            return (
                                <tr className="users-tr" key={user.id}>
                                    <td className="users-td">{user.name}</td>
                                    <td className="users-td">{user.location}</td>
                                    <td className="users-td">
                                        <Button type="primary" onClick={()=>{updatePersonDetails(user)}} className="action-btn">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Binding;