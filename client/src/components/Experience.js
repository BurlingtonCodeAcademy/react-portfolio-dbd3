import React from 'react'



function Experience() {
    return (
        <div id='experience'>
            <h1>My Work Experience and Resume!</h1>
            <div className="center_text">
                <p>
                    My primary goal as a software engineer is to constantly grow and gain experience in full stack web development. By constantly learning and improving, I want to make myself better at what I do each day, learning from setbacks and continuing to push forward.
                </p>
            </div>
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
                        {/* Ids must always be unique on the pages when you're using them */}
                        <div className='skillRow'>Front End</div>
                        <div className='skillRow'>Server Side</div>
                        <div className='skillRow'>Operating Systems</div>
                        <div className='skillRow'>Development Environments</div>
                    </div>

                    <div id='rightSkillCol'>
                        <div className='skillRow'>HTML | HTML5 | XML | CSS</div>
                        <div className='skillRow'>Apache | MySQL | PHP | PHPMyAdmin | Postgres</div>
                        <div className='skillRow'>Linux | Windows NT/2000 Professional/ME/XP/7</div>
                        <div className='skillRow'>Eclipse | Notepad++ | Cygwin | VIM | Visual Studio</div>
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