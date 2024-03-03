import React from 'react'

function Title({ subtitle, title }) {
    return (
        <>

            <div className='heading'>
                <h3>{subtitle}</h3>
                <h1>{title}</h1>
            </div>

        </>
    )
}

export default Title