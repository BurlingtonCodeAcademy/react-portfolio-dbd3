import React from 'react'

function Projects(props) {
    console.log(props)
    return (
        <div id='project_container'>
            <h1>My Projects!</h1>
            
            <div id='project'>
                <h3>Zorkington</h3>
                <img src='zorkington.png'/>
                <div>
                    <p>Zorkington was the first project I designed in BCA. It is a text-based game based on the classic game Zork where the user is attempting to escape a room by solving puzzles and interacting with their environment through a text console!</p>
                </div>
            </div>
            
            
            
            <div id='project'>
                <h3>Tic Tac Toe</h3>
                <img src='Tic Tac Toe.png'/>
                <div>
                    <p>Tic Tac Toe with HTML, CSS, and Javascript was another early project done in my time in BCA
                    </p>
                </div>
            </div>
            
           

            <div id='project'>
                <h3>Geo Vermonter</h3>
                <img src='geo_vermonter.png'/>
                <div>
                    <p>Geo Vermonter is a geo-locating guessing game where the user has to figure out which county is displayed on the page after starting! They can use
                    cardinal direction buttons to move the map around at the cost of maximum score to get a better feel for their location, and can guess when they think they know.
                    This project used React and Leaflet to power the site.</p>
                </div>
            </div>


            <div id='project'>
                <h3>Yelpington</h3>
                <img src='yelpington.png'/>
                <div>
                    <p>Yelpington is based off the app Yelp, and features a map of various restaurant markers in  a Burlington map that the user can click on (or just click the links on the side!) to be taken to a page detailing the restaurant's
                        address, website link, hours, category, and phone number.
                    </p>
                </div>
            </div>

          



            



        </div>
    )
}

export default Projects