import React from 'react'
import './App.css'

function Footer(props) {
    console.log(props)
    return (

        <div class='footer'> 
            <div class="colRow">
                {/* IconCol would be a column of 3 icons */}
                <div className="IconCol">          
                    <div className="iconTextRow"><img src="http://placekitten.com/25/25" alt="Contact"/>
                        <div className="iconText">Contact Placeholder</div>
                    </div>

                    <div className="iconTextRow"><img src="images/linkedin_icon.png" alt="Linkedin" />
                        <div className="iconText">Linkedin Placeholder </div>
                    </div>

                    <div className="iconTextRow"><img src="http://placekitten.com/25/25" alt="Email"/>
                        <div className="iconText">info@untitled.com</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer