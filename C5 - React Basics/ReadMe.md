# Course syllabus for React Basics

### Prerequisites

To take this course, you should understand the basics of HTML, CSS, and JavaScript. Additionally, it always helps to have a can-do attitude!

### Course content

This course is an introduction to React development. You'll learn enough basic concepts to empower you to build simple user interfaces in React.

This course consists of four modules. They cover the following topics.

#### Module 1: Anatomy of React

In this introductory module, you'll learn about what React is and where it is used. You'll also learn how to set up your coding environment so that you have as productive a learning experience as possible. So, the purpose of this module is to understand the what and the why, and to get set up for the modules that follow.

Components are one of the foundations of React. In React, everything revolves around components. You'll learn how to build components, how to structure and customize your React projects, and how to compose layouts by importing components into other components.

You'll learn about passing data from one component to another. You'll learn about JSX syntax in React and how to use it to structure and style your components.

H​ere is a more detailed listing of learning objectives for module 1:

Describe how to use assets within an app to apply styling and functional components.

Use and manipulate props and components to effect visual results.

Create a component folder and demonstrate how to create and import files within that folder.

Create a component to serve a specific purpose.

Explain the concepts behind React and component architecture.

#### Module 2: Data and State

The second module of this course deals with working with events and errors in React. You'll learn how events work and how you can handle them in React. Handling events can sometimes get a bit tricky, so you'll also learn about dealing with errors related to events in React.

H​ere is a more detailed listing of learning objectives for module 2:

- Use common methods to manage state in React.
- Detail the concept and nature of state and state change.
- Describe how data flows in both stateful and stateless components.

- Describe the hierarchical flow of data in React.

- Use an event to dynamically change content on a web page.

- Describe some common errors associated with events and the syntax required to handle them.

#### Module 3: Navigation Updating and Assets in React

In this module, you'll learn about routing and navigation in React. You'll learn how to render partial views and how to update routes in your React apps. You'll understand how assets are used, bundled and embedded.

H​ere is a more detailed listing of learning objectives for module 3:

Use media assets, such as audio and video, with React.

Demonstrate how to manipulate image assets using reference paths.

Explain the folder structure of a React project in terms of embedded or referenced assets.

Demonstrate the conditional implementation and rendering of multiple components.

Create and implement a route in the form of a navbar.

Describe navigation design in React, with a focus on single and multi-page navigation.


#### Module 4: Portfolio Mini-Project (Calculator App)

This module is focused on a practical mini project of building a calculator app in React. Upon completing this module, you'll have coded your own mini project in React, as a starting point for building your React portfolio.

You have now learned about the scope of things you will cover in this course

H​ere is a more detailed listing of learning objectives for module 4:

- Synthesize the skills from this course to create and style a React component.
- Reflect on this course's content and on the learning path that lies ahead.

This app is simple enough that you should be able to understand it on your own. Let’s address the main points to highlight what is happening in the code above.

The top-most component of this app is the App component. The App component returns the Main component. The Main component accepts a single attribute, named msg, as in “message”.

At the very top of the app, the Main function declares how the Main component should behave. The Main component is responsible for rendering the Header component. Note that when the Header component is rendered from inside Main, it also receives the msg prop.

The Header component’s function declaration renders an h1 that reads “Header here”, then another component named Wrapper. Note that the naming here is irrelevant – the components Header and Wrapper are named to make it a bit more like it might appear in a real app – but ultimately, the focus is on having multiple components, rather than describing specific component names properly.

So, the Header component’s function declaration has a return statement, which renders the Wrapper component with the msg prop passed to it.

In the Wrapper component’s function declaration, there’s an h2 that reads “Wrapper here”, in addition to the rendering of the Button component, which also receives the msg attribute.

Finally, the Button component’s function declaration is coded to receive the props object, then inside of the wrapping div, show an h3. The h3 reads “This is the Button component”, and then, under that, there’s a button element with an onClick event-handling attribute. This is passed to an arrow function which should alert the string that comes from the props.msg prop.