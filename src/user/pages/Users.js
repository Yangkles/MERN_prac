import React from "react";
import UsersList from "../../shared/components/UsersList";

const Users = () => {
    const USERS = [
        // {
        //     id: "u1", 
        //     name: "Yunho", 
        //     image: "https://picsum.photos/200/300",
        //     places: 3,
        // }
    ];
    return (
        <UsersList items={USERS}/>
    )
}

export default Users;