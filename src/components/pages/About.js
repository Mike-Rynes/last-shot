import React from 'react';

function About() {
  return (
    <React.Fragment>
      <h1 style={h1tStyle}>About This App</h1>
      <p style={pStyle} ><strong>This is Sunshine Removals Todo List App</strong></p>
      <ol style={ordlistStyle}>
        <li>Tick to cross Off what is done</li>
        <li>Add a Task &amp; press Submit</li>
        <li>Remove( delete ) a Task from Todo List</li>
        <li>So Start you Itenary</li>
      </ol>
      <p style={pStyle} >We hope you find this usefull in planning your Relocation. At Sunshine Removals we always try that little bit EXTRA. This app you can use for free and you do not have to login or any other way of getting your details.</p>
    </React.Fragment>
  )
}

const h1tStyle = {
  margin: '30px 10px 0 20px',
  color: '#fd5f00',
}

const pStyle = {
  marginTop: '20px',
  marginLeft: '20px',
  marginRight: '10px',
}

const ordlistStyle = {
  marginTop: '20px',
  marginLeft: '50px',
  marginRight: '10px',
}

// const ullistStyle = {
//   margin: '10px 0 10px 38px',
// }

export default About;