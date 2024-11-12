import React from 'react';

type Params = {id: string}

const UserPage = async ({params}: {params: Params}) => {

     const user = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id).then(res => res.json());

    return (
        <div>
            <ul>
                <li>
                    ID: {user.id}
                </li>
                <li>
                    Name: {user.name}
                </li>
                <li>
                    Email: {user.email}
                </li>


            </ul>

            {/*{JSON.stringify(user)}*/}
        </div>
    );
};

export default UserPage;