import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    margin: 2% 0;
    display: flex;
    justify-content: center;
    .bio{
        display: flex;
        justify-content: flex-end;
        padding: 2%;
        width: 50%;
    }
    .text{
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-end;
        width: 50%;
        max-width: 40vw;
        margin-bottom: 1%;
        padding: 2%;
    }
    .text h2 {
        margin-bottom: 2vh;
        font-size: 2.5rem;
        text-transform: uppercase;
    }
    .text button{
        margin-bottom: 2vh;
        width: 25%;
        line-height: 1.3;
        background-color: #d1a4eb;
        padding: 0.5% 2%;
        border-radius: 15px;
        height: 4vh;
    }
`

const About = () => {
    return(
        <StyledSection className="about">
            <div className="bio">
                <img src="https://picsum.photos/id/237/536/354" alt="biography dog" />
            </div>
            <div className="text">
                <h2>Winifred Lu</h2>
                <a href="/projects.html"><button>My Projects</button></a>
                <p>They say the best way to succeed is to proceed, step by step. Struggle, make mistakes, and find what works. I started my personal journey with Lambda in the middle of October 2021. As a novice, I still have a long way to go.</p>
            </div>
        </StyledSection>
    )
}
export default About;