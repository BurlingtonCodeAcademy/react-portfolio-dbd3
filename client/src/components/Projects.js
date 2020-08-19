import React from 'react'


function Projects() {

    return (
        <div id='project_container'>
            <h1>My Projects!</h1>
            {/* Project Wrapper displays elements inside in a flex row with flex wrapping */}
            <div className='project_wrapper'>
                {/* Each project class is 50% width */}
                <div className='project'>
                    <h3>Zorkington</h3>
                    <a href="https://github.com/BurlingtonCodeAcademy/zorkington-david-mila"><img src='images/zorkington.png' alt="Zorkington" /></a>
                    <div>
                        <p>Zorkington was the first project I designed in BCA. It is a text-based game based on the classic game Zork where the user is attempting to escape a room by solving puzzles and interacting with their environment through a text console!</p>
                    </div>
                </div>



                <div className='project'>
                    <h3>Tic Tac Toe</h3>
                    <a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-david-mila-tictactoe"><img src='images/Tic Tac Toe.png' alt="Tic Tac Toe App" /></a>
                    <div>
                        <p>Tic Tac Toe with HTML, CSS, and Javascript was another early project done in my time in BCA
                    </p>
                    </div>
                </div>



                <div className='project'>
                    <h3>Geo Vermonter</h3>
                    <a href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-david-christian"><img src='images/geo_vermonter.png' alt="Geo Vermonter" /></a>
                    <div>
                        <p>Geo Vermonter is a geo-locating guessing game where the user has to figure out which county is displayed on the page after starting! They can use
                        cardinal direction buttons to move the map around at the cost of maximum score to get a better feel for their location, and can guess when they think they know.
                    This project used React and Leaflet to power the site.</p>
                    </div>
                </div>


                <div className='project'>
                    <h3>Yelpington</h3>
                    <a href="https://github.com/BurlingtonCodeAcademy/yelpington-dbd3"><img src='images/yelpington.png' alt="Yelington" /></a>
                    <div>
                        <p>Yelpington is based off the app Yelp, and features a map of various restaurant markers in  a Burlington map that the user can click on (or just click the links on the side!) to be taken to a page detailing the restaurant's
                        address, website link, hours, category, and phone number.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects