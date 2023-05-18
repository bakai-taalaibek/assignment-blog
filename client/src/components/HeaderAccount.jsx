import { NavLink } from 'react-router-dom'
import { useUser } from '../utilities/zustand'
import { ExitButton } from './ExitButton'
import { useExitButton } from '../utilities/zustand'
import { useRef } from 'react'
 
const HeaderAccount = () => {
  const { user } = useUser()
  const { exitButtonBool, setExitButtonBool } = useExitButton()
  const exitButtonRef = useRef()

  const handleExitButton = () => {
    setExitButtonBool(!exitButtonBool)

    document.addEventListener('mousedown', handler)
    function handler(event) {
      if (exitButtonRef.current === null) {
        document.removeEventListener('mousedown', handler)
      } else if (!exitButtonRef.current.contains(event.target)) {
        setExitButtonBool(false)
        document.removeEventListener('mousedown', handler)
      } 
    }
  }

  if (user) {
    return (
      <div className='flex  items-center'>
        <NavLink  
          to="profile"
          className={ ({ isActive }) => isActive ? activeNavButton : passiveNavButton } >
            Профиль 
        </NavLink>
        
        <span ref={ exitButtonRef }>
        <ExitButton /> 
        </span>
      </div>
    )
  } 
  
  else {
    return (
      <NavLink 
        to="entry"
        className={ ({ isActive }) => isActive ? activeNavButton : passiveNavButton } >
          Войти
      </NavLink>  
    )
  }
}

export default HeaderAccount

const activeNavButton = `
  font-semibold
  w-[130px]
  text-center
  bg-gray-300 dark:bg-gray-900  
  text-slate-800 text-2xl
  ml-2 py-3`
const passiveNavButton = `
  font-semibold
  w-[130px]
  text-center
  bg-gray-200 dark:bg-gray-900 
  text-slate-500 hover:text-slate-700 text-2xl
  ml-2 py-3`


