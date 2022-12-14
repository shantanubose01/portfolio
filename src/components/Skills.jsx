import React from "react";
import styled from 'styled-components'
const Skills = () => {
    const skills = [
        {
            img:"/html_pic.png",
            title:'HTML'
        },
        {
            img:"/css_pic.png",
            title:'CSS'
        },
        {
            img:"/js_pic.png",
            title:'Javascript'
        },
        {
            img:"/git_pic.png",
            title:'Git/Github'
        },
        {
            img:"/mongodb_pic.png",
            title:'MongoDB'
        },
        {
            img:"/nodejs_pic.png",
            title:'NodeJS'
        },
        {
            img:"/react_pic.png",
            title:'ReactJS'
        },
        {
            img:"/redux_pic.png",
            title:'Redux'
        }
       
    ]

  return (
    <Container id='skills'>
        <h1>Skills</h1>
        <div className='skillsContainer'>
            {skills.map((ele,index)=>(
                <div key={index}>
                    <img src={ele.img} alt={ele.title} width='70px' height='70px'/>
                    <p>{ele.title}</p>
                </div>
            ))}
        </div>
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    margin:auto;
    
    h1{
        color:#01a479;
        text-transform:uppercase;
        text-align: center
    }
    .skillsContainer{
        width:85%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,max-content));
        justify-content:center;
        padding:30px;
        gap:20px;
    }
    .skillsContainer>div{
       display:flex;
       align-items:center;
       flex-direction:column;
       box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
       padding: 20px 0px 10px 0px;
       border-radius: 10px;
    }
    .skillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-transition: all 0.8s;
        transition: all 0.8s;
     }
   
`

export default Skills ;