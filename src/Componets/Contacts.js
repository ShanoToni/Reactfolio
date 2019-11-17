import React from "react";

import "../Styles/Font.css"
import "../Styles/Contacts.scss"
import "../Styles/Buttons.scss"

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { MdKeyboardArrowUp } from 'react-icons/md';



const Contacts = () =>{
    return(
        <section id="contacts">
            <h2>Contacts</h2>
            <div className="contactContainer">
                <a class="pulse no-underline small icon" href="https://github.com/ShanoToni"><FaGithub /></a>
                <a class="pulse no-underline small icon" href="https://www.linkedin.com/in/anton-mitkov-1a49b410a/"><FaLinkedin /></a>
                <a class="pulse no-underline small icon" href = "mailto: anton.b.mitkov@gmail.com"><AiOutlineMail /></a>
            </div>
            <a class="raise no-underline small icon top" href = "#top"><span className="span"><MdKeyboardArrowUp /></span> <br/> Back To Top</a>
        </section>
    );
}

export default Contacts;
