import './Bookdemo.css';
import React, { useRef} from 'react';

function Bookdemo() {

    const name = useRef()
    const email = useRef()
    const compname = useRef()
    const designation = useRef()
    const password = useRef()


    const handleSignUp = () => {
        // get all the value provided by use and save to localstorage using setItem key:value
        if (name.current.value && compname.current.value && designation.current.value && email.current.value && password.current.value) {
            console.log(name.current.value, email.current.value, password.current.value)
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("compname", compname.current.value)
            localStorage.setItem("designation", designation.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signup", email.current.value)
            alert("Signup done successfully")
            window.location.reload()
        }
    }

    
    return (
      <div className="Bookdemo">

        <div className="page8_container" id="Waitinglist">
            <div className="page8_container_text">
              <div className="title">Book A Demo Now</div>
            </div>
            <div className="page8_text_container">
            <div className="card_container">
            <div className="email_container">
            <div>
            <div className="full_width" style={{marginBottom: "5px"}}>
            <div className="input_container">
            <div className="input_label">Name <span className="compulsory_icon">*</span> 
            </div>
            <input type="text" className="input_style" name="name" placeholder="Ex. John Doe" ref={name}/>
            </div>
            </div>
            <div className="full_width" style={{marginBottom: "5px"}}>
            <div className="input_container">
            <div className="input_label">Email <span class="compulsory_icon">*</span>
            </div>
            <input type="email" class="input_style" name="email" placeholder="Ex. mail@website.com" ref={email} required/>
            </div>
            </div>
            <div className="full_width" style={{marginBottom: "5px"}}>
            <div className="input_container">
            <div className="input_label">Company Name <span className="compulsory_icon">*</span> 
            </div>
            <input type="text" class="input_style" name="compname" placeholder="Ex. XYZ PVT LTD" ref={compname}/>
            </div>
            </div>
            <div className="full_width" style={{marginBottom: "15px"}}>
            <div className="input_container">
            <div className="input_label">Your title <span className="compulsory_icon">*</span> 
            </div>
            <input type="text" className="input_style" name="designation" placeholder="Ex. Operational Head" ref={designation}/>
            </div>
            </div>
            <div class="full_width" style={{marginBottom: "5px"}}>
            <div class="input_container">
            <div class="input_label">Password <span class="compulsory_icon">*</span> 
            </div>
            <input type="password" className="input_style" name="pwd" placeholder="Ex. John123" ref={password} required />
            </div>
            </div>
            <a href="#Waitinglist" className="button_container_style">
            <div>
            <button type="submit" onClick={handleSignUp} className="text_button">Book Demo</button>
            </div>
            </a>
            </div>
            </div>
            </div>
            </div>
            <img src="https://voosh.in/static/media/book_now_bg.e9f9294653918137cd78.webp" className="waiting_list" alt="waiting list"/>

            </div>
   
      </div>
    );
  }
  
  export default Bookdemo;