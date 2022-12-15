import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = ()=>{
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-auto min-vh-100 bg-dark'>
                        <ul>
                            <li>
                                <a className='nav-link px-2'>
                                    <i className='bi-house'/> 
                                    <span className=''>Home</span> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar;