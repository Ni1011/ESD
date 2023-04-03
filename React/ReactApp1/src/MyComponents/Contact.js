import React, { useState } from 'react'


const Contact = () => {

    const [visible, setVisible] = useState(false);


    return (
        <>
            <div style={{ height: "50vh", justifyContent: "center", textAlign: "center", }}>
                {visible && <div style={{ padding: 5, }}>The world of One Piece is populated by humans and many other races, such as dwarves, fish-men, and giants. It is covered by two vast oceans, which are divided by a massive mountain range called the Red Line; The Grand Line, a sea that runs perpendicular to the Red Line, further divides them into four seas: North Blue, East Blue, West Blue, and South Blue.</div>}
                <button style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginLeft: 25,

                }} onClick={() => setVisible(true)}>Show</button>
                <button style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginLeft: 25,

                }} onClick={() => setVisible(false)}>Hide</button>

            </div>
        </>
    )
}

export default Contact
