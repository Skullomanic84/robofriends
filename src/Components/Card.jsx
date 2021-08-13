import React from 'react'

function Card({ id, name, email }) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200*200` }/>
            <div>
                <h3 className='pa2'>
                    {name}
                </h3>
                <p className='pa2'>{email}</p>
            </div>
            
        </div>
    )
}

export default Card
