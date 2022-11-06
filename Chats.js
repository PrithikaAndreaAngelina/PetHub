import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import side from '../src/assets/gif.gif'
import { Outlet, Link } from "react-router-dom"

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x32p59l",
        // "template_7322als",
        "template_da5ruv9",
        form.current,
        "MuyuSjljt0dki_EgG"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="edu_bg ">
        <div class="topnav " >
  <a class="active" href="http://localhost:3000/home">
    <img src={side} class="h-12"/>
    </a>
  <a >
    <Link to="/profile">
    Profile</Link>
    </a>
  <a >
  <Link to="/chats">
    Chats</Link>
  </a>
  <a >
  <Link to="/deso">
    Deso</Link>
  </a>
</div>
        <div class="flex justify-center pt-12 pb-24">
      <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Requirement</label>
        <input type="text" name="user_req" />
        <label>Location</label>
        <input type="text" name="user_loc" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
    </div></div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  align-content: center;
  display:flex;

  form {
    padding:5%;
    background-color:white;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight:bold;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;