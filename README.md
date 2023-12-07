# React Roadmap

## CLI Tools

* Create-react-app
* vite - is a build tool that aims to provide a faster and leaner development experience for modern web projects. **npm create vite@latest**

## Components

* Class Components - Class components are the original way to create components in React. They are ES6 classes that extend the React.Component class. Class components can have state and lifecycle methods.

* Functional Components - Functional components are a newer way to create components in React. They are simply JavaScript functions that take props as an argument and return a React element. Functional components cannot have state or lifecycle methods, but they can use hooks to achieve similar functionality.

Feature | Class Components | Functional Components
--- | --- | ---
State | Yes | No (but can use hooks)
Lifecycle methods | Yes | No (but can use hooks)
Syntax | ES6 class that extends React.Component | JavaScript function that takes props as an argument and returns a React element

```
convert a class component to a functional component

class MyComponent extends React.Component {
state: { 
      name: 'Bob' 
    }
render() {
      return (
        <p>Hello, my name is {this.state.name}</p>
      );
    }
}

const MyComponent = () => {
  const [name, setName] = React.useState('Bob');
  return (<p>Hello, my name is {name}</p>);
}
```

## Components Basics

### JSX

SX stands for JavaScript XML. It is a syntax extension of JavaScript that allows users to write HTML directly in React. JSX is a React extension that allows users to write JavaScript code that looks like HTML.

### Props vs State

* In React, props and state are two important concepts that help manage data flow between components.
* Props are arguments that are passed to a component, while state is data that is owned by the component itself. Props are immutable, meaning they cannot be changed by the child component, while state is mutable, meaning it can be changed by the component.
* Props are used to pass data from a parent component to a child component, while state is used to manage data within a component.

### Conditional Rendering

Conditional rendering is a feature of React that allows you to render different components or JSX depending on certain conditions. This is a powerful feature that can help you create dynamic and interactive user interfaces.

There are a few different ways to implement conditional rendering in React. One common way is to use the if statement. For example, the following code will render the Greeting component if the isLoggedIn prop is true:

```
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn && <Greeting />}
    </div>
  );
};
```

Another way to implement conditional rendering is to use the && operator. The && operator will only return the value on its right-hand side if the value on its left-hand side is true. For example, the following code will render the Greeting component if the isLoggedIn prop is true:

```
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn && <Greeting />}
    </div>
  );
};
```

You can also use the ternary operator to implement conditional rendering. The ternary operator is a shorthand way of writing an if statement. For example, the following code will render the Greeting component if the isLoggedIn prop is true:

```
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <Greeting /> : null}
    </div>
  );
};
```

### Composition and Inheritance

Composition and inheritance are two different ways to reuse code in React.

Composition is the process of creating a new component by combining existing components. This is done by passing components as props to other components. For example, you could have a Button component and a Form component. You could then create a SubmitButton component by passing the Button component as a prop to the Form component.

Inheritance is the process of creating a new component that inherits the properties and methods of an existing component. This is done by using the extends keyword. For example, you could have a BaseForm component that defines the common properties and methods of all forms. You could then create a ContactForm component that extends the BaseForm component and adds additional properties and methods specific to contact forms.

In general, composition is preferred over inheritance in React. This is because composition is more flexible and easier to reason about. With composition, you can create complex components by combining smaller, independent components. This makes your code more modular and reusable.

Here are some of the key differences between composition and inheritance in React:

* Composition is more flexible: With composition, you can combine any components together, regardless of their hierarchy. With inheritance, you can only inherit from a single parent component.
* Composition is easier to reason about: When you use composition, it is clear which components are responsible for which functionality. With inheritance, it can be difficult to track down where a particular piece of functionality comes from.
* Composition promotes code reuse: When you use composition, you can reuse components multiple times in different contexts. With inheritance, you can only reuse a component once.

Overall, composition is the preferred way to reuse code in React. It is more flexible, easier to reason about, and promotes code reuse.

## Rendering

### Component Life Cycle

The React component lifecycle is a series of events that occur in the life of a React component. These events are called lifecycle methods, and they are triggered at specific points in the component's lifecycle.

There are three main phases in the React component lifecycle:

* Mounting: This is the initial phase of the lifecycle, and it occurs when the component is first created and inserted into the DOM.
* Updating: This phase occurs when the component's state or props change.
* Unmounting: This is the final phase of the lifecycle, and it occurs when the component is removed from the DOM.


Each phase of the lifecycle has its own set of lifecycle methods. These methods can be used to perform specific tasks at specific points in the component's lifecycle.

For example, the componentDidMount() method is called after the component has been mounted and inserted into the DOM. This method can be used to initialize the component's state or to fetch data from a server.

The componentDidUpdate() method is called after the component has been updated. This method can be used to update the DOM or to perform other tasks that need to be done after the component has been updated.

The componentWillUnmount() method is called before the component is unmounted and removed from the DOM. This method can be used to clean up any resources that the component has created.

Lifecycle methods are a powerful tool that can be used to control the lifecycle of React components. By understanding the different phases of the lifecycle and the different lifecycle methods, you can write more efficient and effective React code.

```
Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

Mounting – Birth of your component
Update – Growth of your component
Unmount – Death of your component
```

### Lists and Keys

In React, a key is a unique identifier that is assigned to each element in a list. It helps React to identify which items have changed, updated, or deleted from the list. It is crucial to assign a unique key to each element in a list to help React differentiate between the items and perform updates more efficiently.

Keys are used in React to identify which items in the list are changed, updated, or deleted. They help React figure out which items in a list have been added, removed, or changed, which speeds up DOM updates.

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

```
const todoItems = todos.map((todo) => <li key={todo.id}> {todo.text} </li> );
```

When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

```
const listItems = numbers.map((number) => <li key={number.toString()}> {number} </li> );
```

Keys should be given to the elements inside the array to give the elements a stable identity.

## Render Props

Render props is a technique in React for sharing code between React components using a prop whose value is a function. The name "render prop" comes from the fact that the function is responsible for rendering a prop.

Here is an example of how to use render props:

```
const MyComponent = ({ children }) => {
  return (
    <div>
      <h1>My Component</h1>
      {children()}
    </div>
  );
};

const MyOtherComponent = () => {
  return (
    <MyComponent>
      {() => <p>This is my content!</p>}
    </MyComponent>
  );
};
```
In this example, the MyComponent component takes a function as a prop called children. This function is responsible for rendering the content of the MyComponent component. The MyOtherComponent component simply renders a MyComponent component and passes in a function that returns a paragraph of text.

Render props can be a useful technique for sharing code between components, but they can also be confusing and difficult to use. If you are not sure whether or not to use render props, it is generally best to avoid them.

## React refs

Refs in React are short for references. As the name suggests, they allow you to reference and interact with DOM nodes or React components directly. Refs come in handy when you need to reference some information in a component, but you don’t want that information to trigger new renders.

Common use cases of React refs include:

* Managing focus, text selection, or media playback
* Triggering imperative animations
* Integrating with third-party DOM libraries

### Creating refs

In React, Refs can be created by using either the createRef method or the useRef Hook.

### Creating Refs using the useRef Hook

You can create refs using the useRef Hook, which is available as part of the React library. Here’s an example of creating a reference in a functional component:

```
import React, { useRef } from "react";

function ActionButton() {
  const buttonRef = useRef(null);

  function handleClick() {
    console.log(buttonRef.current);
  }

  return (
    <button onClick={handleClick} ref={buttonRef}>
      Click me
    </button>
  );
};
export default ActionButton;
```

In the code snippet above, we used the useRef() Hook to create a reference to the button element, which we named buttonRef. This reference enables us to access the current value of buttonRef using buttonRef.current. One advantage of using a ref is that it maintains its state across renders, making it a valuable tool for storing and updating values without causing unnecessary re-renders.

### Creating refs using the createRef Hook

To create a ref in a class component, we use React.createRef(). Here’s an example:

```
import React, { Component } from "react";

class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.buttonRef.current);
  }

  render() {
    return (
      <button onClick={this.handleClick} ref={this.buttonRef}>
        Click me
      </button>
    );
  }
}

export default ActionButton;
```

In the code snippet above, we use React.createRef() to create a reference that we named buttonRef. We then assign the reference to the button element.

### Differences between useRef and createRef

There are some key differences between the useRef Hook and the createRef method in React. Firstly, createRef is generally used when creating a ref in a class component, whereas useRef is used in function components.

Secondly, createRef returns a new ref object each time it is called, while useRef returns the same ref object on every render.

Another important difference is that createRef does not accept an initial value, so the current property of the ref will be initially set to null. In contrast, useRef can accept an initial value, and the current property of the ref will be set to that value.

## Events

React is an open-source JavaScript library for building user interfaces. It is declarative, efficient, and flexible. React makes it easy to create interactive UIs by using a component-based approach.

Events are actions that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.

In React, events are handled using the SyntheticEvent type. SyntheticEvent is a wrapper based on the browser's native events. It provides an unified API, prevents browser inconsistencies, and ensures that the event works across multiple platforms.

To handle an event in React, you can use the onChange event. The onChange event is triggered when the value of an input element changes.

You can also use the onSubmit event to handle form submissions. The onSubmit event is triggered when the user submits a form.

In React, events propagate outward from the innermost element to the outermost element. This is referred to as event bubbling.

## High Order Components

A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. It is a pattern that emerges from React's compositional nature. HOCs are not part of the React API, but they are a powerful tool that can be used to reuse component logic and extend the functionality of existing components.

Here is an example of a HOC that adds a loading spinner to a component:

```
const withLoadingSpinner = (Component) => {
  return (props) => {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
};
```

This HOC can be used to add a loading spinner to any component by passing it as the argument to the withLoadingSpinner function. For example, the following code shows how to use the withLoadingSpinner HOC to add a loading spinner to a button component:

```
const Button = ({ isLoading, children }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <button>{children}</button>;
};

const LoadingButton = withLoadingSpinner(Button);
```

The LoadingButton component will now display a loading spinner if the isLoading prop is set to true.

HOCs are a powerful tool that can be used to reuse component logic and extend the functionality of existing components. They are a key part of the React ecosystem and are used by many popular React libraries.

## Hooks

React Hooks are a new feature in React that allow you to use state and other React features without writing a class. This makes functional components more powerful and flexible.

There are several different Hooks available, each of which provides a different functionality. Some of the most common Hooks include:

* useState: This Hook allows you to store and update state in a functional component.
* useEffect: This Hook allows you to perform side effects, such as fetching data or updating the DOM, in a functional component.
* useContext: This Hook allows you to access context values in a functional component.
* useReducer: This Hook allows you to manage complex state logic in a functional component.

To use a Hook, you simply call it from inside your functional component. The Hook will return some data or perform some action.

For example, the following code shows how to use the useState Hook to store and update the count of a button:

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

In this example, the useState Hook returns an array with two elements: the current count and a function to update the count. The count variable is stored in the state of the component, and the setCount function is used to update the state.

When the user clicks the button, the setCount function is called, which increments the count by 1. The component is then re-rendered, and the updated count is displayed.

## Basic Hooks

### useState Hooks

The useState hook is a function that allows you to add state to functional components in React. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

To use the useState hook, you first need to import it from React:

```
import React, { useState } from 'react';
```

Once you have imported the hook, you can use it in your functional component like this:

```
function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example, we are using the useState hook to track the number of times the button has been clicked. The initial state is 0, and whenever the button is clicked, the count is incremented by 1. The updated state is then used to render the current count to the DOM.

The useState hook is a powerful tool that allows you to add state to functional components in React. It is easy to use and can be used to create complex and interactive user interfaces.

### useEffect Hooks

The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.

Let's use a timer as an example.

```
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```

## Custom Hooks

Custom React hooks are functions that let you reuse state and other React features without writing a class. They're a great way to organize your code and make it more reusable.

To create a custom hook, start by creating a function that starts with the word "use". This convention helps React identify your function as a hook. The function can then take any arguments you need and return any value you want.

Here's an example of a custom hook that counts the number of times a component has rendered:

```
import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);

  return { count, setCount };
}
```

This hook takes no arguments and returns an object with two properties: count and setCount. The count property is the current number of times the component has rendered, and the setCount function is a function that can be used to update the count.

Here's an example of how to use the useCount hook in a component:

```
function MyComponent() {
  const { count, setCount } = useCount();

  return (
    <div>
      <p>This component has rendered {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

This component uses the useCount hook to get the current count and the setCount function. It then displays the count in a paragraph and a button that increments the count when clicked.

Custom hooks are a powerful tool that can help you write more reusable and organized code. If you find yourself writing the same code in multiple components, consider creating a custom hook to encapsulate that code.

## React Router

React Router is a routing library for React that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.

Here are some of the benefits of using React Router:

* It enables navigation between views from different components in a React application.
* It allows the browser URL to be changed.
* It keeps the UI in sync with the URL.
* It makes it easy to create single-page web or mobile apps that allow navigating without refreshing the page.
* It allows you to use browser history features while preserving the right application view.

To use React Router, you first need to install it from npm: **npm install react-router-dom**

```
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Rap your app with BrowserRouter
<BrowserRouter>
<App />  
</BrowserRouter>

//Define you Routes in your app and import it on the top
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/create" element={<Create />} />
  <Route path="/blogs/:id" element={<BlogDetails />} />
  <Route path="*" element={<NotFound />} />
</Routes>

//Now you are all set. You can use this with
<Link to="/create" element={Create}/>
```

## State Management

### Redux Toolkit

React redux is an advanced state management library for React. As we learned earlier, React only supports component level state management. In a big and complex application, large number of components are used. React recommends to move the state to the top level component and pass the state to the nested component using properties. It helps to some extent but it becomes complex when the components increases.

React redux chips in and helps to maintain state at the application level. React redux allows any component to access the state at any time. Also, it allows any component to change the state of the application at any time.

**Concepts**: React redux maintains the state of the application in a single place called Redux store. React component can get the latest state from the store as well as change the state at any time. Redux provides a simple process to get and set the current state of the application and involves below concepts.

**Store**: The central place to store the state of the application.

**Actions**: Action is an plain object with the type of the action to be done and the input (called payload) necessary to do the action. For example, action for adding an item in the store contains ADD_ITEM as type and an object with item's details as payload. The action can be represented as −

```
{ 
   type: 'ADD_ITEM', 
   payload: { name: '..', ... }
}
```

**Reducers**: Reducers are pure functions used to create a new state based on the existing state and the current action. It returns the newly created state. For example, in add item scenario, it creates a new item list and merges the item from the state and new item and returns the newly created list.

**Action creators: Action creator creates an action with proper action type and data necessary for the action and returns the action. For example, addItem action creator returns below object −

```
{ 
   type: 'ADD_ITEM', 
   payload: { name: '..', ... }
}
```

**Component**: Component can connect to the store to get the current state and dispatch action to the store so that the store executes the action and updates it's current state.

* React component subscribes to the store and get the latest state during initialization of the application.
* To change the state, React component creates necessary action and dispatches the action.
* Reducer creates a new state based on the action and returns it. Store updates itself with the new state.
* Once the state changes, store sends the updated state to all its subscribed component.

### Redux API

Redux provides a single api, connect which will connect a components to the store and allows the component to get and set the state of the store.

The signature of the connect API is −

```
function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
```

All parameters are optional and it returns a HOC (higher order component). A higher order component is a function which wraps a component and returns a new component.

```
let hoc = connect(mapStateToProps, mapDispatchToProps) 
let connectedComponent = hoc(component)
```

Let us see the first two parameters which will be enough for most cases.

* mapStateToProps − Accepts a function with below signature.

```
(state, ownProps?) => Object
```

Here, state refers current state of the store and Object refers the new props of the component. It gets called whenever the state of the store is updated.

```
(state) => { prop1: this.state.anyvalue }
```

* mapDispatchToProps − Accepts a function with below signature.

```
Object | (dispatch, ownProps?) => Object
```

Here, dispatch refers the dispatch object used to dispatch action in the redux store and Object refers one or more dispatch functions as props of the component.

```
(dispatch) => {
   addDispatcher: (dispatch) => dispatch({ type: 'ADD_ITEM', payload: { } }),
   removeispatcher: (dispatch) => dispatch({ type: 'REMOVE_ITEM', payload: { } }),
}
```
