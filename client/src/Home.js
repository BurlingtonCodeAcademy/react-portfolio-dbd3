import React from 'react'


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            postList: []
        }
    }


    render() {
        return(

        
        <div>
            <div id='intro'>
                <div>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE3_WMqfXEAzA/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=yHfefUDzGJgw0wEgraTlR2e5y_fCEqLnE8Rg2C6aq3c"></img>
                    <h1>Who am I?</h1>
                </div>
                <div>
                    <p> My name is David Daviss.
                    My passion is solving unique problems in software that force me to grow and improve as a developer by balancing creativity and efficiency.

                    I am skilled with helping people less experienced than me in my past experiences as well as listening to those more experiences in order to further my growth.

                    I’m an enthusiastic fan of clever, simple solutions to complex problems that show the ability to make confusing problems accessible to everyone. This portfolio website is designed to showcase my projects, hobbies, and other facts about my life!</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Home