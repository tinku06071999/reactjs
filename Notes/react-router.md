# <Link> tag <a> tag

- in a tag the whole page will refresh
- but in react page not refresh, render through the componenets, thats why link tag is used in react.
- in a we use href while in Link we use to.

# <NavLink>

- we can write the classes as call back function

# Outlet component

- this method is used for dynamic change the pages
- for example lets suppose we have website in that we want that the header and footer componnet will apppear on every page but the inner compnnets/ pages will change when go that particular page then we have to use outlet
- it will change the pages dynamically

```
// layout.jsx
<Header />
<Outelet />
<Footer />
```

- in above example outlet use Layout.jsx as root or default file and change the content what ever comes

# RouterProvider compnent

- when we installed react router then we can render all the pages/components with the help of it.
- it basically take a props
- we can use it in our main.jsx file where rendering the app.js file we can render the RouteProvider intsted of app.js in main.js

- syntax

```
ReactDom.createRoot(documnet.getElementById('root)).render(
   <React.StrictMode>
     <RouteProvider router = {router} />
   <React.StrictMode>
)
```

- Now we have to create the router prop
- for it we have to methods
- before creating router props lets understand whole porcess in summary
- we create different components for application
- now we can import them in app.jsx and then render the app.jsx in main.jsx
- but here we can done this in deiffrent manner
- we create Layout.jsx that will work as parent file in which we render the header and footer componenet on each page and use outlet for another pages
- now in router props we have to give the path and elment name as childeren of layout.jsx
- for it have to methods

### method - 01

```
 const router = createBrowserRouter ([
   {
     path:'/',
     element: <Layout />,
     children: [{
            path: "",
            element: <Home />

     },
     {
       path:'/about',
       element: <About />
     },
     {
       path:'/contact',
       element: <Contact />
     }
   ]
   }
 ])

```

### method - 02

```
const router = createBrowserRouter(
    createRouterFromElement(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />}>
            <Route path='about' element={<About/>}>
        </Route>
    )
)
```

# loader

- when we are fetching some data on some api then to optimise the fetching method we use it
- for example we are fetching the folloers from github api of some user and we have a github navigation that render us to the github page and where we printing or showing the folloers
- if we not use the loader then the fetching will start on click tha nav option
- but when we use the loader method then the fetching start whenever we hover that navigation option and store it in cache
- thats how it optimise the fetching

```
<Route
loader ={()=>{

}}
/>
```

## note: useLoaderData hook is used when we used Loader
