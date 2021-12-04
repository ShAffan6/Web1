import "./contact-us-form.css"
import React from 'react'
import logo from './logo.jpg'

import Facebook from './Facebook_icon.png'
import Instagram from './instagram_icon.png'
import Twitter from './Twitter.png'

import{useState,useEffect} from "react"


function ContactUsForm() {
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [enquiry,setenquiry] = useState("");
  const [message,setmessage] = useState("")
  const [valid,setvalid] = useState(false)

  function updatename(event) {
    setname(event.target.value)
  }

  function updateemail(event) {
    setemail(event.target.value)
  }

  function updateenquiry(event) {
    setenquiry(event.target.value)
  }

  function updatemessage(event) {
    setmessage(event.target.value)
  }

  function submitInfo(event) {
    event.preventDefault();
    if (valid === true)
    {
    alert("We will get back to you soon.")
    }
    else{
    alert("Please fill all fields of the form.")
    }
  }
  

  useEffect (()=>{
    if (
      name === "" ||
      email === "" ||
      enquiry === "" ||
      message === ""
    ){
  
      setvalid(false)
    } else{
      setvalid(true)
    }
  })

  return (
    <div className="contact-page">
      <div>
        <form>
          <h1 className="form-title"> Contact Us</h1>
          <label>
            Name
            <input type="text" name="name" placeholder="Enter your name" value={name} onChange={(event)=>updatename(event)}/>
          </label>
          <label>
            Email
            <input type="email" name="Email" placeholder=" Enter your email" value={email} onChange={(event)=>updateemail(event)} />
          </label>
          <label>
            Enquiry
            <input type="text" name="Enquiry" placeholder="Enter your enquiry" value={enquiry} onChange={(event)=>updateenquiry(event)} />
          </label>
          <label>
            Message
            <input type="text" name="Message" placeholder="Enter your message" value={message} onChange={(event)=>updatemessage(event)} />
          </label>
          <input onClick={(event)=>submitInfo(event)} value="SEND MESSAGE" className="submit" type='submit' />
        </form>
        <img className="Titanic-Fitness-logo" src={logo} alt="logo"></img>
      </div>
        <div className="find-us">
          <h2>Find Us</h2>
          </div>
          <div className="logos">
            <a href="https://www.facebook.com/TenHealthFitness/photos/pb.181187291162.-2207520000../10159727844071163/?type=3&theater" target="_blank"> <img src={Facebook}alt="Facebook logo"/>
            </a>
            <a href="https://www.instagram.com/explore/tags/fitness/?hl=en" target="_blank"> <img src={Instagram} alt="Instagram logo"/>
            </a>
            <a href="https://twitter.com/hashtag/fitness" target="_blank"> <img src={Twitter} alt="Twitter logo"/>
            </a>
          </div>
    </div>
  )
}

export default ContactUsForm
