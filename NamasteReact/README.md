# routes

# react rounter dom package


# createBrowserRouter
- will create a routing configuration for our app
- routing configuration mean some information that defines what will happen on a specific routes
- takes a list of path as input

const appRouter=createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>,
        }
    ]
)

# RouterProvider
root.render(<RouterProvider router={appRoutes}>)

# react router dom error page

# create your own error page

const appRouter=createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>,
            errorElement:<Error/>
        }
    ]
)

# useRouteError from "react-router-dom"
- it's a hook
const err=useRouteError();

# children routes
- suppose we want to change the body components, but show same header for all pages/ multiple pages

import {outLet} from 'react-router-dom;
Const Home=()=>{
    return(
        <Header/>
        <outlet/>
    )
}
const appRouter=createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>,
            children:[
                {
                    path:'/about',
                    element:<About/>
                }
            ]
            errorElement:<Error/>
        }
    ]
)

# <a> tag vs Link component from "react-router-dom"
<Link to="path"></Link> : doesn't reload the page, just refershes the component

# single page application
- one page, only the components are getting changes based on the url (using client site routing)

# routing
two types of routing
- clint side routing - when using <Link></Link> (single page application)
- server side routing - when using <a></a> (making a http request)

# dynamic routing
/path/:id - id can change

# useParams from "react-router-dom"
const {id}=useParams();

# optimizing
- each component should have single responsibiliy (modularity - break down into small module)
- use custome hooks
- chunking/code splitting/dynamic bundling/lazy loading/on demand loading/dynamic import : to breack down your code in smaller chunks
   - break it based on logical feature
   - lazy, Suspense
- Higher order component




