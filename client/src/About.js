import React from 'react'

function About(props) {
    console.log(props)
    return (
        <div id='about'>
            <div id='header-div'>
                <h1>About Me</h1>


            </div>
            <p>
                I was born in Hanover New Hampshire. I have traveled and lived in multiple locations throughout my life such as Pittsburgh Pennsylvania and San Antonio Texas that has shaped my childhood.
                I eventually moved back to Hanover New Hampshire to start my sophmore year of highschool and am still living here as of typing this! 
            </p>
            <p>
                I got into software engineering during my senior year of highschool when I took a class learning about Python and enjoyed the various projects such as designing platforming games and solving various puzzles and problems.
                Software seemed like a collection of puzzles solved to reach a goal of a functioning product that you could show to the world. From this point on, I decided to make software engineering my career and got accepted to Vermont Technical College where I got my Bachelor's 
                of Science in Software Engineering. I made friends along the way with similar interests in software that carved out my understanding in software and continued me down a path to growth and learning.
            </p>
            <p>
                My current goal at the moment is to continue my growth in full stack web development at my time in Burlingon Coding Academy so I can gain valuable skills to take to open positions in Burlington Vermont that are activiely seeking employees with knowledge in Javascript, React, and MongoDB.
            </p>
        </div>

    )
}

export default About