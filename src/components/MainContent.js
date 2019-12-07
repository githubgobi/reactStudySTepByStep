import React from 'react';

function MainContent(){
    const firstName = "GOBI"
    const lastName = "R"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if(hours < 12){
        timeOfDay = "morning"
    }else if(hours >=12 && hours <=17){
        timeOfDay = "afternoon"
    }else{
        timeOfDay = "night"
    }
    return (
        <main>
              <p>This is where most of my content will go...</p>
            <h1>Hello {`${firstName} ${lastName}`}</h1>
            <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
    <h1>Good {timeOfDay} !</h1>
          </main>
    )
}
export default MainContent