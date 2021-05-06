import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addContact} from '../Redux/Actions/contactAction'
import shortid from 'shortid'
import { useHistory } from 'react-router-dom'

const AddContact = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const [name,setName] = useState(null)
    const [phone,setPhone] = useState(null)
    const [email,setEmail] = useState(null)

    const createContact = (e) => {
        e.preventDefault()
        const new_contact = {
            id: shortid.generate(),
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addContact(new_contact))
        history.push('/')
        //console.log(name, phone, email)
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Add Contact
            </div>
            <div className="card-body">
                <form onSubmit={e=>createContact(e)}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        value={name} 
                        onChange={e=>setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="number"
                        className="form-control"
                        placeholder="Enter your phone"
                        value={phone} 
                        onChange={e=>setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>

            </div>
            
        </div>
    )
}

export default AddContact
