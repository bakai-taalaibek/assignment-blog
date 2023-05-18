import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useUser, usePage } from './utilities/zustand'
import { useQuery } from 'react-query'
import blogService from './services/blogs'

function App() {
  const { setUser } = useUser()
  const { page } = usePage()

  useEffect(() => {    
    const loggedUserJSON = window.localStorage.getItem('loggedWelbexUser')    
    if (loggedUserJSON) {      
      const storedUser = JSON.parse(loggedUserJSON)      
      setUser(storedUser)      
      blogService.setToken(storedUser.token)    
    }  
  }, [])

  const { isLoading } = useQuery(['blogs', page], () => blogService.getBlogs(page))  

  return (
    <div>
      <Header/>
      <div className={ body }>
        <div className={ contentArea }>
          { isLoading
            ? <div className='text-3xl text-slate-700 mt-10'>Loading...</div>
            : <Outlet />}          
        </div>
      </div>
    </div>

  );
}

export default App;

const body = `
  h-max min-h-screen
  flex justify-center
  bg-slate-500 dark:bg-slate-700  `;

const contentArea = `
  w-full max-w-screen-lg
  bg-white dark:bg-slate-900 
  text-center dark:text-slate-200 
  pt-5 `;
