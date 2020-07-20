import React from 'react'
import './App.css'

function Footer(props) {
    console.log(props)
    return (

        // Why is this displaying as block in react when I set it to flex?
        <div class='footer'> 
            <div class="colRow">
                {/* IconCol would be a column of 3 icons */}
                <div className="IconCol">          
                    <div className="iconTextRow"><img src="http://placekitten.com/25/25" />
                        <div className="iconText">Contact Placeholder</div>
                    </div>

                    <div className="iconTextRow"><img src="http://placekitten.com/25/25" />
                        <div className="iconText">Linkedin Placeholder </div>
                    </div>

                    <div className="iconTextRow"><img src="http://placekitten.com/25/25" />
                        <div className="iconText">info@untitled.com</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer