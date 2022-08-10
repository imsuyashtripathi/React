### Commands

1. Create a new React Application: npx create-react-app the-awesome-app
2. To start the React Application(from the the-awesome-app folder): npm start


### Git Repositories

1. Application code and Presentation: 
2. MocK REST API: https://github.com/aniljos/REST-API-Mock

### Training Program on [React]


1.  HTML
2.  CSS
3.  JavaScript for React
4.  TypeScript
5.  Introduction to React
6.  Creating React Applications
7.  React Components  
8.  Building Data-Driven Applications
9.  React Hooks
10. Invoking REST API’s
11. Redux & React Redux
12. Single-Page Applications with Routing
13. Securing React Applications
14. Deployment


### ES6

1. Hoisting: All declarations are hoisted(moved) to the top of the respective scope
2. let and const:  create block scopes, no hoisting
3. global scope: There is a global object and all scopes varibales are members of the global object.
4. global object: window in the browser
5. functions: first-class types of JavaScript: store it in a variable, pass it as an argument to a function, return it from a function, store it in a collection 
6. Spread operator: On any iterbale: Array, Object
7. Template Literals: String interpolation
8. Destructuring: On any iterbale: Array, Object
9. modules: default export/import or named export/import


### React Hooks

1. useState
2. useRef
3. useEffect
4. useCallback -- Optimization
5. useImperativeHandle -- what ref is pointing to 
6. useContext
7. useReducer - implement the reducer patter for state update, complex state, centralize the logic for state update
 

### Functional Components

1. React.memo -- Optimization
2. React.forwardRef -- creates refs for functional components


### State Management

1. Improves the User Expereinec
2. Conversational State -- Session State ===> We need to store this state
3. Browser Storage: LocalStorage & Session Storage ==> not a very secure place
4. Application Memory: More secure, Redux or React Context

### Redux

1. Redux Flow:  Store, Reduced, Actions, Dispatch, Subscribe
2. Action Creators : Helper functions to create actions
3. Middleware: Intercepting the action, logging, validations etc.
4. Reducer: reducer has to be synchronous
5. To make an Async call to process an action==> use a middleware
6. Async Middleware: library, Thunk, Saga
7. Redux Toolkit: Opionated library
8. Redux Toolkit: Action creators, in the reducer the state can be directly changed, async oprations using thunk is simplified
9. Redux-Persist
 

### React Context

1. Manages State
2. useContext: Access the state down the heirarchy
3. UpdateState: some state change should happen to render the views 


### Redux vs. React Context

1. Redux is a 3rd party library, React Context is part of react library
2. React Context is a good option if child component need to just access/read the data
3. Redux is good when child components need to read and write(there is a proper flow)
4. React Context: can have multiple contexts
5. Redux: A single store