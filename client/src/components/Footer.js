import React from 'react'



function Footer() {
    console.log("Testing")
    return (

        <div className='footer'> 
            <div className="colRow">
                {/* IconCol would be a column of 3 icons */}
                    
                    <div className="iconTextRow"><img src="images/footer/footerlink-email.png" alt="Contact"/>
                        <div className="iconText">Contact Me!</div>
                    </div>

                    <div className="iconTextRow"><a href="https://www.linkedin.com/in/david-daviss-29b0b41a7/"><img src="images/footer/gj-linkedin1.png" alt="Linkedin" /></a>
                        <div className="iconText"><a href="https://www.linkedin.com/in/david-daviss-29b0b41a7/">Linkedin</a></div>
                    </div>

                    <div className="iconTextRow"><a href="https://github.com/dbd3"><img src="images/footer/gj-github1.png" alt="Github"/></a>
                    <div className="iconText"><a href="https://github.com/dbd3">Github</a></div>
                    </div>
               
            </div>
        </div>

    )
}

export default Footer