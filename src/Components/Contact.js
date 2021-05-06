import React from 'react'
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom'

const Contact = ({contact}) => {
    const {id,name, phone, email} = contact
   // console.log(contact)
    return (
        <tr key={id}>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td>
                <Avatar name={name} size="40" round={true} className="mr-2"/>
                {name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
                <Link className="btn btn-warning mr-2" to={`/contacts/edit/${id}`}>Edit</Link>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default Contact
