import React from 'react'

import './index.css';

// const App = () => {
//    const now = new Date()
//    const a = 10 
//     const b = 20 
//   return (
//     <div>
//       <p>hello world , it is {now.toString()}
//       </p>

//       <p>
//         {a} + {b} = {a + b}
//       </p>
//     </div>
//   );}
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }
// const Hello = (qiymat) => {
//   return (
//     <div>
//       <p>Hello {qiymat.name} shi is {qiymat.mirafzal} years old</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="George" mirafzal="1010" />
//       <Hello name="Daisy" mirafzal="010" />
//     </div>
//   )
// }

// const Hello = (props) => {
//   return (
//     <div>
//       <p>
//         hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const App = ()=> {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }


// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
//     </div>
//   )
// }


// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Footer />
//     </div>
//   )
// }

// const App = () => {
//   return [
//     <h1>Greetings</h1>,
//     <Hello name="Maya" age={26 + 10} />,
//     <Footer />
//   ]
// }



const Header =  (props) => {
  return(
   < p> {props.course}</p>  
  )

}
const Content =  (props) => {
  return(
    < p> {props.info}</p>  
  )

 }
 const Total =  (props) => {
   return(
   < p> {props.average}</p>  
   )
  
 }
const App = () => {
  // const-definitions
const course = "HTML"
const info= " it is the best course"
const average = '2000 million'
  return (
    <div>
      <Header course={course} />
      <Content info={info} />
      <Total average={average} />
    </div>
  )
}
export default App;
