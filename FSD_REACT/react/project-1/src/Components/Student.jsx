import React from 'react'

const Student = () => {
    return (
        <div style={{backgroundColor: 'lightblue' , border: '2px solid red', height: '300px', width: '300px'}}>
            <h2 style={{ color: 'red'}}>Student Info </h2>
            <img src="https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_1280.jpg" alt="Student Image" height={'150'} width={'150'} />
            <h3>Student Name:AD</h3>
            <h4>B.Tech (CSE-DS/A) </h4>
        </div>
    )
}

export default Student
