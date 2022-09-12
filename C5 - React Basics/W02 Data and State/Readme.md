# Data and state

#### Learning Objectives
- Detail the concept and nature of state and state change.
- Use common methods to manage state in React.
- Describe how data flows in both stateful and stateless components.
- Describe the hierarchical flow of data in React.
- Use an event to dynamically change content on a web page.
- Describe some common errors associated with events and the syntax required to handle them.

## Dynamic Events and How to handle them
You’re now aware that React can work with most of the same events found in HTML, although React handles them differently.

This means that you may encounter unfamiliar errors when you run your event-driven React code. However, in this reading, you’ll learn about some of the most common errors associated with events and how you can deal with them.

#### Events Errors
When you work in any programming environment, language, or framework, you are bound to write code that throws errors, for a variety of reasons.

Sometimes it's just about writing the wrong syntax. Other times it's about not thinking of all the possible scenarios and all the possible ways that things can go wrong in your code.

Regardless of what causes them, errors are a part of everyday life for a developer.

The JavaScript language comes with a built-in error handling syntax, the try...catch syntax.
Let’s examine an example of an error in JavaScript:
```
(5).toUpperCase()
```
Obviously, you cannot uppercase a number value, and thus, this throws the following error:
`Uncaught TypeError: 5.toUpperCase is not a function`

To handle this TypeError, you can update the code with a try...catch block that instructs the code to continue running after the error is encountered:
```
try {
(5).toUpperCase()
} 
catch(e) {
console.log(`Oops, you can't uppercase a number. Trying to do it resulted in the following`, e)
}
```
The try-catch block will output some text in the console:

**Oops, you can't uppercase a number. Trying to do it resulted in the following TypeError: 5.toUpperCase is not a function**

It is assumed that if you are taking this course that you are already familiar with how the try...catch syntax works, so I won't go into any details after this quick refresher.

In React, an error in the code, such as the one above, will result in the error overlay showing in the app in the browser.

In this specific example, the error would be:

- ReferenceError
- prop is not defined
- You can click the X button to close the error overlay.

Since event-handling errors occur after the UI has already been rendered, all you have to do is use the error-handling mechanism that already exists in JavaScript – that is, you just use the try...catch blocks.

Here is an example of handling errors in an event handler using the try...catch syntax.

```
import React from "react";

function Button() {
  const [err, setErr] = React.useState(false);

  function clickHandler() {
    try {
      throw new Error("Testing custom error");
    } catch (err) {
setErr(err);
    }
  }

  if (err) {
    return <h1>Ooops, there was an error</h1>;
  }

  return <button onClick={clickHandler}>Test for error</button>;
}

function App() {
  return <Button />;
}

export default App;
```

#### Event handling and embedded expressions

In this reading, you’ll learn the different ways to embed expressions in event handlers in React:

With an inline anonymous ES5 function 

With an inline, anonymous ES6 function (an arrow function) 

Using a separate function declaration 

Using a separate function expression 

You may find this reading useful as a reference sheet.

For clarity and simplicity: a function will simply console log some words. This will allow you to compare the difference in syntax between these four approaches, while the result of the event handling will always be the same: just some words output to the console.

**Handling events using inline anonymous ES5 functions**
This approach allows you to directly pass in an ES5 function declaration as the onClick event-handling attribute’s value:
```
<button onClick={function() {console.log('first example')}}>
        inline anonymous ES5 function event handler
      </button>
```

**Handling events using inline anonymous ES6 functions (arrow functions)**
With this approach, you can directly pass in an ES6 function declaration as the onClick event-handling attribute’s value:
```
<button onClick={() => {console.log('second example')}}>
    inline anonymous ES5 function event handler
    </button>
```

**Handling events using separate function declarations**
With this approach, you declare a separate ES5 function declaration, and then you reference its name in the event-handling onClick attribute, as follows:
```
function App() {

    function thirdExample() {
console.log('third example')
    }
    return (
        <div className="thirdExample">
            <button onClick={thirdExample}>
                using a separate function declaration
            </button>
        </div>
    )
}
export function App
```

## Data flow in React
You’ve just learned how the parent-child relationship can be set up so that data flows from parent to child. 

In this reading, you’ll learn how to detail the flow of data from parent to child. You will then learn why code samples need to be clear and concise. Finally, you will explore data flow in greater detail by looking at more examples. This should act as a refresher to knowledge gained in previous courses.

#### Parent-child data flow
In React, data flow is a one-way street. Sometimes it's said that the data flow is unidirectional. Put differently, the data in React flows from a parent component to a child component. The data flow starts at the root and can flow to multiple levels of nesting, from the root component to the sub-component, then the sub-sub-component, and further down the hierarchy.

A React app consists of many components, organized as a **component tree**. The data flows from the root component to all components in the tree structure that requires this data, using **props**.

**Props are immutable (cannot be changed).**

The two main benefits of this unidirectional data flow are that it allows developers to:

1. comprehend the logic of React apps more quickly and 

2. simplify the data flow. 

Here’s a practical example of this:

Imagine that the parent component passes a prop (name) to the child component. The child component then uses this prop to render the name in the UI.

##### Parent Component:
```
function Dog() {
return (
<Puppy name="Max" bowlShape="square" bowlStatus="full" />
)
}
```

##### Sub-component:
```
function Puppy(props) {
return (
<div>
{props.name} has <Bowl bowlShape="square" bowlStatus="full" />
</div>
)
}
```

#### sub-sub-component:
```
function Bowl(props) {
return (
<span>
{props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
</span>
)
}
```

### What are hooks?
So to summarize, calling the useState hook does two things:​
It creates a state variable with an initial value that represents the current state, which in this example is showMenuand​ it creates a function to set that state variable’s value, which in this case is setShowMenu.​

The function setShowMenu is used to update the value of showMenu by passing the boolean value to it.​

It does not matter what names you use for the state variables.  You can define them, based on your component and use case.

The useState hook should be called at the top level of your component. ​​

In this example, notice that the useState hook was used to track a boolean state value. ​​

You can use the useState hook to track any type of data.  It could be strings, numbers, arrays, booleans or objects. ​

For instance, you can even track the number of times a button was pressed.

In addition to the hooks that come out of the box with React, you can also build your own hooks which will let you extract custom component logic into reusable functions. ​

This is an excellent feature and benefit of using hooks.

The biggest benefit of hooks is the readability and simplicity that they provide to the code. ​

In this video, you learned the basics on React Hooks and explored the useState hook. ​

You now understand the benefits of using hooks and how you can use them within your React applications.​

#### Using hooks
Now, that you understand what hooks are in React and have some basic knowledge on the `useState` hook, let’s dive in deeper. In this reading, you will learn how to use hooks in React components and understand the use-cases for the `useState` hook.

Let’s say you have a component with an input text field. The user can type into this text field. The component needs to keep track of what the user types within this text field. You can add state and use the `useState` hook, to hold the string.

As the user keeps typing, the local state that holds the string needs to get updated with the latest text that has been typed.

```
import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 
```

To do this, let's define a React component and call it InputComponent. This component renders three things:

- An input text field 
- Any text that has been entered into the field 
- A Reset button to set the field back to its default state 

As the user starts typing within the text field, the current text that was typed is also displayed.

The state variable inputText and the setText method are used to set the current text that is typed. The useState hook is initialized at the beginning of the component.

```
const[inputText, setText] =useState('hello');
```
By default, the inputText will be set to “hello”.

As the user types, the handleChange function, reads the latest input value from the browser’s input DOM element, and calls the setText function, to update the local state of inputText.

```
function handleChange(e){
setText(e.target.value);
}
```
Finally, clicking the reset button will update the inputText back to “hello”. 

Isn’t this neat?

Keep in mind that the inputText here is local state and is local to the InputComponent. This means that outside of this component, inputText is unavailable and unknown. In React, state is always referred to the local state of a component.

Hooks also come with a set of rules, that you need to follow while using them. This applies to all React hooks, including the useState hook that you just learned.

- You can only call hooks at the top level of your component or your own hooks. 

- You cannot call hooks inside loops or conditions. 

- You can only call hooks from React functions, and not regular JavaScript functions. 

To demonstrate, let’s extend the previous example, to include three input text fields within a single component. This could be a registration form with fields for first name, last name and email. 

```
import { useState } from 'react'; 

export default function RegisterForm() { 
  const [form, setForm] = useState({ 
    firstName: 'Luke', 
    lastName: 'Jones', 
    email: 'lukeJones@sculpture.com', 
  }); 

  return ( 
    <> 
      <label> 
        First name: 
        <input 
          value={form.firstName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              firstName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Last name: 
        <input 
          value={form.lastName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              lastName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Email: 
        <input 
          value={form.email} 
          onChange={e => { 
            setForm({ 
              ...form, 
              email: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <p> 
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.email})
      </p> 
    </> 
  ); 
} 
```

You do not need to have three separate state variables in this case, and instead you can consolidate them all together into one form object for better readability.

In addition to the useState hook, there are other hooks that come in handy such as useContext, useMemo, useRef, etc. When you need to share logic and reuse the same logic across several components, you can extract the logic into a custom hook. Custom hooks offer flexibility and can be used for a wide range of use-cases such as form handling, animation, timers, and many more. 

In this reading, you have explored hooks in detail and understand how to use the useState hook to maintain state within a component. You also understand the benefits of using hooks within a React component.