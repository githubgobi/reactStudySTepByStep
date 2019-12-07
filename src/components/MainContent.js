import React from 'react';

function MainContent(){
    const firstName = "GOBI"
    const lastName = "R"
    const date = new Date(2018, 6, 31, 15)
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize:30
    }
    if(hours < 12){
        timeOfDay = "morning"
        styles.color = "#04756F"
    }else if(hours >=12 && hours <=17){
        timeOfDay = "afternoon"
        styles.color = "#D90000"
    }else{
        timeOfDay = "night"
        styles.color = "#8914A3"
    }
    return (
        <main>
              <p>This is where most of my content will go...</p>
            <h1>Hello {`${firstName} ${lastName}`}</h1>
            <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
            <h1 style={styles}>Good {timeOfDay}!</h1>
          </main>
    )
}
export default MainContent