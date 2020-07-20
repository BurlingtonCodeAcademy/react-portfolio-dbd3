import React from 'react'
import './App.css'

function Experience(props) {
    console.log(props)
    return (
        <div id='experience'>
            <p>
                My primary goal as a software engineer is to constantly grow and gain experience in full stack web development. By constantly learning and improving, I want to make myself better at what I do each day, learning from setbacks and continuing to push forward.
                </p>
            <div>
                
                   <div id='short-line'>My last work experience was at TomTom, where I did the following:</div>
            
            <ul>
                <li>Solely developed MuniScrape, a web scraping software that used Python to scrape municipal data from various sites and output completed spreadsheets with updated data to save employees over 100 hours of work</li>
                <li>Developed Python software to handle incoming geo-data called TIGER files to update a database with important road information for GPS’s; Python web-scraping software like BeautifulSoup, Selenium, and Pandas</li>
                <li>Worked with senior developers to develop software that would convert road GIS data and push that information onto an AWS cloud</li>
            </ul>
             

                <p>
                    Other than this activies, I have taken care of over 5 dogs in my life and currently own 2 dogs at the moment. I've lived with animals throughout my life and plan to do so. Animals have
                    always been important to me as loyal companions. For two years I cared for my neighbor's pets during highschool by walking her dog and feeding her cat.
            </p>

            </div>

        </div>
    )
}

export default Experience