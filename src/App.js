// import React from 'react'

// import './index.css';

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



// const Header =  (props) => {
//   return(
//    < p> {props.course}</p>  
//   )

// }
// const Content =  (props) => {
//   return(
//     < p> {props.info}</p>  
//   )

//  }
//  const Total =  (props) => {
//    return(
//    < p> {props.average}</p>  
//    )

//  }
// const App = () => {
//   // const-definitions
// const course = "HTML"
// const info= " it is the best course"
// const average = '2000 million'
//   return (
//     <div>
//       <Header course={course} />
//       <Content info={info} />
//       <Total average={average} />
//     </div>
//   )
// }
// const Header = (props) => {
//   console.log(props)
//   return (
//     <>
//       {/* <h1>{props.course}</h1> */}
//       {/* <h2> {props.logo}</h2> */}


//     </>
//   )
// };

// // const App = () => {
// //   const course = 'Half Stack application development'
// //   const part1 = {
// //     name: 'Fundamentals of React',
// //     exercises: 10
// //   }
// //   const part2 = {
// //     name: 'Using props to pass data',
// //     exercises: 7
// //   }
// //   const part3 = {
// //     name: 'State of a component',
// //     exercises: 14
// //   }

// //   return (
// //     <div>
// //       <Header course={course} part1={  part1.exercises} padrt1={part1.name } part2={ part2} part3={ part3}/>
// //     </div>
// //   )
// // }
// const Content = (props) => {
//   const ilk = props.parts
//   // const il = ilk
//   console.log(ilk)
//   return(

//     <>
//     {/* <h1>{props.parts}</h1> */}

//     </>
//   )
// };

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   // return (
//   //   // <div>
//   //   //    <Header course={course} logo={parts[2].name}/>
//   //   // </div>

//   // )

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       {/* <Total parts={parts} /> */}
//     </div>
//   )
// }


// const Total= () => {
//   return(
//     <>


//     </>
//   )
// }





// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   const lll = course.name
//   console.log(lll)
//   const kkk = course.parts[2].name
//   console.log(kkk)

//   return (
//     <div>
//     {lll}
//     <br/>
//     {kkk}

//     </div>
//   )
// }
// const Hello = (props) => {
//     return (
//         <div>
//             <p>
//                 Hello {props.name}, you are {props.age} years old
//             </p>
//         </div>
//     )
// }

// const App = () => {
//     const name = 'Peter'
//     const age = 10

//     return (
//         <div>
//             <h1>Greetings</h1>
//             <Hello name="Maya" age={26 + 10} />
//             <Hello name={name} age={age} />
//         </div>
//     )
// }

// const Hello = (props) => {
//     const bornYear = () => {
//       const yearNow = new  Date().getFullYear()
//       console.log(yearNow)
//       return yearNow - props.age
//     }

//     return (
//       <div>
//         <p>
//           Hello {props.name}, you are {props.age} years old
//         </p>
//         <p>So you were probably born in {bornYear()}</p>
//       </div>
//     )
//   }

// const Hello = () => {



//   const props = {
//     name: 'Arto Hellas',
//     age: 35,
//   }


//   const name = props.name
//   const age = props.age

//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }



// props  = {
//   name: 'Arto Hellas',
//   age: 35,
// }

// const Hello = (props) => {

// const { name, age} = props 


//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }


// import React, { useState } from 'react'


// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const handleClick = () => {
//     console.log('clicked')
//   }

//   // console.log(New)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>
//         plus
//       </button>
//     </div>
//   )
// }// 
// const App = () => {
//   const [counter, setCounter] = useState(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>
//         plus
//       </button>
//       <button onClick={() => setCounter(0)}>
//         zero
//       </button>
//     </div>
//   )
// }
// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)

//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={increaseByOne}>
//         plus
//       </button>
//       <button onClick={setToZero}>
//         zero
//       </button>
//     </div>
//   )
// }
// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter} />
//       <button onClick={increaseByOne}>
//         plus
//       </button>
//       <button onClick={setToZero}>
//         zero
//       </button>
//     </div>
//   )
// }
// const Display = ({ counter }) => {
//   return (
//     <div>{counter}</div>
//   )
// }
// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />
//     </div>
//   )
// }
// export default App
import React from "react";
import { useState } from "react";
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right}
//     </div>
//   )
// }

// {
//   left: 0,
//   right: 0
// }

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => { 
//     const newClicks = { 
//       left: clicks.left + 1, 
//       right: clicks.right 
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = { 
//       left: clicks.left, 
//       right: clicks.right + 1 
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     const newClicks = { 
//       ...clicks, 
//       left: clicks.left + 1 
//     }
//     setClicks(newClicks)
//   }
  
//   const handleRightClick = () => {
//     const newClicks = { 
//       ...clicks, 
//       right: clicks.right + 1 
//     }
//     console.log(newClicks.clicks);
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat((' salom')))
//     setLeft(left + 1)
//   }
//   <br/>

//   const handleRightClick = () => {
//     setAll(allClicks.concat((' hayr')))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
   
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join('')}</p>
//     </div>
//   )
// }
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}





export default App