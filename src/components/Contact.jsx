import React from 'react'

import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
  

    return (
        <Container id='contact'>
            <div className='contact'>
                <div className='contactText'>
                    <div>
                        <h1 style={{textAlign:"center"}}>Contact Me</h1>
                    </div>
                    <div className='middleSection'>
                        <div>
                            <LinkedInIcon fontSize="large" />
                            <h1>LinkedIn</h1>
                            <p>You can contact me on LinkedIn</p>
                            <a href="https://www.linkedin.com/in/shantanubose01/" rel="noreferrer" target="_blank">
                                <p>shantanu-bose</p>
                            </a>
                        </div>
                        <div>
                            <PhoneIcon fontSize="large" />
                            <h1>Phone</h1>
                            <p>Here is My Phone Number</p>
                            <a href="tel:+917029743933" rel="noreferrer" target="_blank">
                                <p>+917029743933</p>
                            </a>
                        </div>
                        <div>
                            <EmailIcon fontSize="large" />
                            <h1>Email</h1>
                            <p>You can Simply mail me just by clicking on my email</p>
                            <a href='mailto:shantanubose.work@gmail.com' rel="noreferrer" target="_blank"><p>shantanubose.work@gmail.com</p></a>
                        </div>
                        <div>
                            <LocationOnIcon fontSize="large" />
                            <h1>Location</h1>
                            <p>Kolkata,West Bengal</p>
                           
                        </div>
                    </div>
                </div>
               

            </div>
            
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    background-color:black;
    .contact{
        width:85%;
        margin:auto;
        padding-top:20px;
        display:flex;
        flex-direction:column;
        gap:30px;
        
    }
    
    .middleSection{
        display:flex;
        justify-content:space-around;
    }
    .middleSection>div{
        padding:10px;
    }
    .middleSection>div>h1{
       font-size:x-large;
       margin-top:0px;
    }
    .middleSection>div p{
        margin-top:0px;
    }
    .middleSection>div a{
        text-decoration:none;
        color:#01a479;
     }
    .contactForm>form{
        display:flex;
        gap:10px;
    }
    .contactForm>form>div{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:50%;
    }
    .contactForm>form>div>input{
        width:95%;
        padding:5px 5px 5px 15px;
        border:1px solid #e9ecef;
        border-radius:8px;
    }
    
    .contactForm>form>div:first-child>input{
        height:30px;
        margin-bottom:30px;
    }
    .contactForm>form>div:last-child>textarea{
        width:95%;
        height:175px;
        margin-bottom:30px;
        position:relative;
        padding:5px 5px 5px 10px;
        border:1px solid #e9ecef;
        border-radius:8px;
    }
    .contactForm>form>div:last-child>input::placeholder{
        position:absolute;
        top:15px;
    }
    .contactForm>form>div:last-child>div{
        width:95%;
        display:flex;
        align-items:center;
        justify-content:right;
    }
    .contactForm>form>div:last-child>div>button{
        background-color:#01a479;
        color:white;
        border:none;
        padding:10px 20px 10px 20px;
        border-radius:10px;
        cursor:pointer;
    }
    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    .endSection{
        display:flex;
        align-items:center;
        justify-content:center;
        height:70px;
        background-color:black;
        color:white;
        margin-top:20px;
    }
    .endSection>p{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
    }
    .emailSent{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
    .emailSent>h1,.emailSent>p{
       margin-top:0px;
    }
    @media only screen and (min-width: 768px) and (max-width:1120px){
        .middleSection{
            flex-direction:column;
        }
        .contactForm>form{
            flex-direction:column;
        }
        .contactForm>form>div{
            width:70%;
        }
        .contactForm>form{
            align-items:center;
        }
        .contactForm>form>div:last-child>div{
            width:90%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }
        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
    }
    
    @media only screen and (min-width: 481px) and (max-width:768px){
        .middleSection{
            flex-direction:column;
        }
        .contactForm>form{
            flex-direction:column;
        }
        .contactForm>form>div{
            width:80%;
        }
        .contactForm>form{
            align-items:center;
        }
        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }
        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
        .emailSent>h1{
            font-size:x-large;
        }
        .emailSent>p{
            width:80%;
            font-size:small;
        }
    }
    @media only screen and (min-width:320px) and (max-width:480px){
        .middleSection{
            flex-direction:column;
        }
        .contactForm>form{
            flex-direction:column;
        }
        .contactForm>form>div{
            width:80%;
        }
        .contactForm>form{
            align-items:center;
        }
        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }
        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
        .endSection>p{
            font-size:15px;
        }
        .emailSent>h1{
            font-size:large;
        }
        .emailSent>p{
            width:70%;
            font-size:12px;
        }
    }
    @media only screen and (max-width: 320px){
        .middleSection{
            flex-direction:column;
        }
        .contactForm>form{
            flex-direction:column;
        }
        .contactForm>form>div{
            width:70%;
        }
        .contactForm>form{
            align-items:center;
        }
        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }
        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
        .endSection>p{
            font-size:10px;
        }
        .emailSent>h1{
            font-size:small;
        }
        .emailSent>p{
            width:70%;
            font-size:10px;
        }
    }
    @media only screen and (max-width: 319px){
        .middleSection{
            flex-direction:column;
        }
        .contactForm>form{
            flex-direction:column;
        }
        .contactForm>form>div{
            width:80%;
        }
        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }
        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
        .endSection>p{
            font-size:8px;
        }
    }
    
`
export default Contact;