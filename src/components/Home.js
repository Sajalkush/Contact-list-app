import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    }

    return (
        <div className='container' style={{ boxSizing: 'content-box' }}>
            <div className='row'>
                <div className='col-md-12 my-5 text-end'>
                   <Link to='/add' className='btn btn-outline-dark fs-4'>Add Contact</Link>
                </div>
                <div className='col-md-10 mx-auto'>
                    <table className='table table-hover'>
                        <thead className='text-white bg-dark text'>
                            <tr >
                                <th scope='col'>S.no</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Number</th>
                                <th scope='col' className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, id) => (
                                    <tr key={id} style={{ borderBottom: '1px solid #ccc' }}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className='btn btn-small btn-warning me-2'>Edit</Link>
                                            <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;
