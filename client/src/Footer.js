import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Footer(props) {
    console.log(props)
    return (
        <div>
            <div id='footer'>
                {/* <!-- IconCol would be a column of 3 icons --> */}
                <div class="IconCol">
                    <div class="iconTextRow"><img src="http://placekitten.com/25/25" />
                        <div class="iconText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus
                    corporis voluptate consectetur maiores incidunt vero beatae, voluptas illum eligendi?</div>
                    </div>

                    <div class="iconTextRow"><img src="http://placekitten.com/25/25" />
                        <div class="iconText">(000)-000-000</div>
                    </div>

                    <div class="iconTextRow"><img src="http://placekitten.com/25/25" />
                        <div class="iconText">info@untitled.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer