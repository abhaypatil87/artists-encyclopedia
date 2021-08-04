# The Encyclopedia of Artists
## Front-End app

## See it in action
The application has been deployed on Netlify and is available here [Artists-Encyclopedia](https://artists-encyclopedia.netlify.app/)
## Introduction
The user facing app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In order to achieve the task at hand, below NPM packages, frameworks, and libraries were consumed
- React
- React-DOM
- Material UI
- GraphQL Apollo
- ReduxJS/Toolkit
- React-Helmet
- i18next / React-i18next

## How to run the app
Inside the project directory, please run following command to run the application

```shell
npm install
npm start
```

This will install all the dependencies and will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The URL will be redirected to ``/artists`` automatically.

## Thought Process
The application has been organised in a simple yet as semantically standard manner as possible, as below:
1. Inside the *src* folder, all the React visual components are under the *components* directory
2. The visual arrangements like Layouts/Views (or as some call it, pages), are hosted under *views* directory
3. The *store* directory, as the name suggested initialises the Application store.The store has been implemented as a mixture of two different flavours:
    1. **Browser's LocalStorage**: to store the last searched artist. I chose this approach to provide a seamless experience, as if and when a page is refreshed, the redux state is lost, leaving us with a blank slate to start over.
    If the user could see results based on their last searched history, it'd provide an ease of experience.
   2. Redux Store to maintain the list of **Favourite** artists, and app-wide **Notifications**
4. The *graphql* directory hosts queries, and client configuration for GraphQL
5. The *utils* directory hosts utilities such as debouncer, LocalStorage wrapper, and common utility methods
6. The tests are under the *test* folder. At the moment, I have focused only on unit testing a few components. This is the reason the tests are very much of a precise fashion.

## Afterthoughts and TODO
I have made sure the application is accessible solely with a keyboard as much as possible and Screen Reader upto a certain degree. Accessibility to me is one of the most important features a web application can have.
It teaches us to and design and develop things with empathy!

Usually I make sure my application is Mobile-Friendly, however due to the fact that the store is of a mixed approach of **Redux + LocalStorage**, any mobile browser would block local-storage for security reasons. Hence, this application may not provide the best mobile device experience. However, if your disable the browser guards, the application will work.

As far as I can think of at the moment, some TODO items are as below:

*   **Night Mode**

    This tiny little feature could make the app way more fun and useful

*   **Testing**, more automated testing, integration tests and more testing!
