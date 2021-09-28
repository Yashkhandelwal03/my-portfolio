import React from 'react';

const Bar = ({name,level}) => {
    return (
        <div className="bar">
            <div className="bar-container" style={{ width:`${level}%`}}>
                {name}
            </div>
        </div>
    )
}

export default Bar
