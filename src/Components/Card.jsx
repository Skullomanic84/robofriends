import React from 'react'

function Card() {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src='https://robohash.org/test?200*200' />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@mail.com</p>
            </div>
            
        </div>
    )
}

export default Card
