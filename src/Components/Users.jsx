import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleUser from './SingleUser';

const Users = () => {
    const initialUsers = useLoaderData()
    
    
    return (
        <div>
            
            <SingleUser initialUsers={initialUsers}></SingleUser>
        </div>
    );
};

export default Users;