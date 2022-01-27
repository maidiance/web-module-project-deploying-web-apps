import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    #projects .container .gallery{
        margin: 2% auto;
        width: 20%;
        text-align: center;
    }
`

const Projects = () => {
    return(
        <StyledSection id="projects">
            <div class="container">
                <div class="gallery">
                    <div class="img box-one"> 
                        <img src="https://picsum.photos/300" alt="first portfolio box" />
                    </div>
                    <p>title of a</p>
                </div>
                <div class="gallery">
                    <div class="img box-two">
                        <img src="https://picsum.photos/300" alt="second portfolio box" />
                    </div>
                    <p>project</p>
                </div>
                <div class="gallery">
                    <div class="img box-three">
                        <img src="https://picsum.photos/300" alt="third portfolio box" />
                    </div>
                    <p>might go</p>
                </div>
                <div class="gallery">
                    <div class="img box-four">
                        <img src="https://picsum.photos/300" alt="fourth portfolio box" />
                    </div>
                    <p>right here</p>
                </div>
            </div>
            <div class="container">
                <div class="gallery">
                    <div class="img box-five">
                        <img src="https://picsum.photos/300" alt="fifth portfolio box" />
                    </div>
                    <p>cool thing</p>
                </div>
                <div class="gallery">
                    <div class="img box-six">
                        <img src="https://picsum.photos/300" alt="sixth portfolio box" />
                    </div>
                    <p>fun thing</p>
                </div>
                <div class="gallery">
                    <div class="img box-seven">
                        <img src="https://picsum.photos/300" alt="seventh portfolio box" />
                    </div>
                    <p>spicy thing</p>
                </div>
                <div class="gallery">
                    <div class="img box-eight">
                        <img src="https://picsum.photos/300" alt="eighth portfolio box" />
                    </div>
                    <p>special thing</p>
                </div>
            </div>
        </StyledSection>
    )
}
export default Projects;