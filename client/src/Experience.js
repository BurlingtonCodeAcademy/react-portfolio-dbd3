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
                <h3>Work Experience</h3>
                <div id='short-line'>My last work experience was at TomTom, where I did the following:</div>

                <ul>
                    <li>Solely developed MuniScrape, a web scraping software that used Python to scrape municipal data from various sites and output completed spreadsheets with updated data to save employees over 100 hours of work</li>
                    <li>Developed Python software to handle incoming geo-data called TIGER files to update a database with important road information for GPS’s; Python web-scraping software like BeautifulSoup, Selenium, and Pandas</li>
                    <li>Worked with senior developers to develop software that would convert road GIS data and push that information onto an AWS cloud</li>
                </ul>


                <h3>My skills</h3>
                <div id='skills'>
                    <div id='leftSkillCol'>
                        <div id='skillRow'>Front End</div>
                        <div id='skillRow'>Server Side</div>
                        <div id='skillRow'>Operating Systems</div>
                        <div id='skillRow'>Operating Systems</div>
                    </div>

                    <div id='rightSkillCol'>
                        <div id='skillRow'>HTML | HTML5 | XML | CSS</div>
                        <div id='skillRow'>Apache | MySQL | PHP | PHPMyAdmin | Postgres</div>
                        <div id='skillRow'>Linux | Windows NT/2000 Professional/ME/XP/7</div>
                        <div id='skillRow'>Eclipse | Notepad++ | Cygwin | VIM | Visual Studio</div>
                    </div>
                             
                </div>
                <div id='resume-div'>
                    <h3>Download my resume by clicking the icon below!</h3>
                    <a href="/DavidDavissResume.pdf" download>
                        <img src="/resume_icon.png" alt="My Personal Resume Screenshot" />
                    </a>
                    </div>
            </div>

        </div>
    )
}

export default Experience