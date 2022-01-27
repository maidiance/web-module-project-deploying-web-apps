import React from 'react';
import styled from 'styled-components';

const StyledFooter=styled.footer`
    footer{
        background-color: #1d1120;
        color: #d1a4eb;
        display: flex;
        justify-content: center;
    }
    footer h2{
        font-size: 3.5rem;
    }
    footer .bottom{
        text-align: center;
        margin: 5%;
        width: 50%;
    }
    footer button{
        border-radius: 15px;
        width: 30%;
        height: 5vh;
        margin: 2% auto;
    }
    footer .socialMedia{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        margin: 5%;
    }
    footer .socialMedia h2{
        text-align: center;
    }
    footer .socialMedia .buttons{
        margin: 1% 2%;
        display: flex;
        justify-content: space-around;
    }
    footer .socialMedia .buttons button{
        border-radius: 15px;
        height: 5vh;
        width: 100%;
    }
    footer .socialMedia .buttons .social{
        width: 30%;
    }
`

const Footer = () => {
    return(
        <StyledFooter id="#contact">
            <div class="bottom">
                <h2>Like what you see?</h2>
                <a href="/contact.html"><button>Contact Me</button></a>
            </div>
            <div class="socialMedia">
                <h2>Follow Me:</h2>
                <div class="buttons">
                    <a class="social" href="http://instagram.com"><button>Instagram</button></a>
                    <a class="social" href="http://twitter.com"><button>Twitter</button></a>
                    <a class="social" href="http://linkedin.com"><button>LinkedIn</button></a>
                </div>
            </div>
    </StyledFooter>
    )
}
export default Footer;