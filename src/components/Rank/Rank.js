import React from 'react'

const Rank = ({fname, lname, entries}) => {
    return (
        <div>
            <div className = 'white f3'>
                {`${fname} ${lname} your current entries are...`}
            </div>
            <div className="white f1">
                {`#${entries}`}
            </div>
        </div>
    )
}

export default Rank