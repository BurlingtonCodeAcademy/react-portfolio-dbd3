import React from 'react'
import './App.css'

function Footer(props) {
    console.log(props)
    return (

        // Why is this displaying as block in react when I set it to flex?
        <div class='footer'> 
            <div class="colRow">
                {/* IconCol would be a column of 3 icons */}
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