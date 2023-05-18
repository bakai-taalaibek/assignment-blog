import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import { Entry } from "../components/Entry"
import BlogList from "../components/BlogList";
import Profile from "../components/Profile";
import SingleBlog from "../components/SingleBlog";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <BlogList />,
      },
      {
        path: 'entry',
        element: <Entry />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'blog/:blogId',
        element: <SingleBlog />,
      },
      {
        path: 'user/:blogId',
        element: <SingleBlog />,
      },
    ],
  },
]);
