import {CREATE_CONTACT} from '../../Constants/types'

//actions
export const addContact = (contact_details) =>{
    return {
      type:CREATE_CONTACT,
      payload:contact_details
    }
  }