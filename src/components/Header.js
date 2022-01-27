import React from 'react';
import styled from 'styled-components';

const StyledHeader=styled.header`
    h1{
        font-family: 'EB Garamond', serif;
        font-size: 4.5rem;
        text-transform: uppercase;
        color: #e4f1fe;
        margin-left: 2%;
    }
    header {
        padding: 2%;
        margin-bottom: 2vh;
    }
    #top{
        background-color: #4E365C;
    }
    #top nav{
        margin-left: 4%;
    }
    #top nav button{
        border-radius: 15px;
        margin: 2% 0;
        padding: 0.5% 2%;
    }
    #top nav button:hover{
        scale: 110%;
        background-color: #d1a4eb;
    }
    #top nav .home button{
        background-color:#1d1120;
        color:#e4f1fe;
    }
`

const Header = () => {
    return(
        <StyledHeader id='top'>
            <h1>Winifred Lu</h1>
            <nav>
                <a className="home" href="#top"><button>Home</button></a>
                <a href="/about.html"><button>About</button></a>
                <a href="/projects.html"><button>Projects</button></a>
                <a href="/contact.html"><button>Contact</button></a>
            </nav>
        </StyledHeader>
    )
}
export default Header;