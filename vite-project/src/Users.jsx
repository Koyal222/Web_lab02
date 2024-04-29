import React from "react";
import "./users.css";
import {User} from "./User";

export default function Users(){
    const users =[

    ];
    return (
        <>
        <div id="container">
            <h1> these are {users.length} users </h1>
            {
                users.map((item) => (
                    <User email = {item.email}
                    username ={item.username} />
                ))
            }
        </div>
        </>
    );
}
