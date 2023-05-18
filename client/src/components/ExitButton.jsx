import { useExitButton } from '../utilities/zustand'
import { useUser } from '../utilities/zustand'
import { useNavigate } from 'react-router-dom'
import blogServices from '../services/blogs'

export const ExitButton = () => {
  const { setExitButtonBool } = useExitButton()
  const { setUser } = useUser()
  const navigate = useNavigate()

  const handleExit = () => {
    setExitButtonBool(false)
    setUser(null)
    blogServices.setToken(null)
    navigate('')
  }

  return (
    <div >
      <button 
        className={ exitButtonStyle } 
        onClick={handleExit} >
          Выйти
      </button>
    </div>
  )
}

const exitButtonStyle = `
  w-[90px]
  font-semibold
  bg-sky-100 dark:bg-gray-900 
  text-slate-500 hover:text-slate-700 text-2xl
  mx-2 py-3`

