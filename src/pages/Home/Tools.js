import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {

    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <h1>Our tools </h1>
            {
                tools.map(tool => <Tool tool={tool} key={tool._id}></Tool>)
            }
        </div>
    );
};

export default Tools;