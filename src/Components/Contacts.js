import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact'

const Contacts = () => {
    const contactsData = useSelector(state => state.contact.contacts)
    console.log(contactsData)

    return (
        <div className="pt-5">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactsData.map( contact => ( <Contact contact={contact} key={contact.id}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
