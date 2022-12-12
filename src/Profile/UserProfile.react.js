import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button";
import { BsFillPencilFill } from "react-icons/bs";
import "./UserProfile.css"
import { useState } from 'react';

import ChangeEmailUI from "./ChangeEmailUI.react";

function UserProfile(props){
    const user = props.user;
    const username = user.username;
    const email = user.attributes.email;

    const [showSetEmailUI, setShowSetEmailUI] = useState(false);
    return (
        <div>
            <Accordion className="userContainer">
                <Accordion.Item>
                    <Accordion.Header>Account Information</Accordion.Header>
                    <Accordion.Body>
                        <div className="info">
                            <div>Username:</div>
                            <div>{username}</div>
                        </div> <hr />
                        <div className="info">
                            <div>Email:</div>
                            <div> {email} <Button variant="secondary" size="sm" onClick={() => setShowSetEmailUI(true)}><BsFillPencilFill /></Button></div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <ChangeEmailUI show={showSetEmailUI} setShow={setShowSetEmailUI} email={user.email} />
        </div>
    )
}

export default UserProfile;