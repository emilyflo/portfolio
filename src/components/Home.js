export default function Home() {

    // Greet viewers according to the time of day
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "evening"
    }

    return (
        <>
            <body>
                <h1>Good {timeOfDay}!</h1>
                <p>I am a software engineer.</p>
                <p>Python 🐍 is my favorite language to write in.</p>
                <p>I am a curious life-long learner.</p>
            </body>
        </>
    )
}