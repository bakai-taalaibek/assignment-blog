import { NavLink } from 'react-router-dom'
import HeaderAccount from './HeaderAccount'

const Header = () => {
  return (
    <header className={ headerStyle }>
      <div className='max-w-[calc(870px)] mx-auto flex [&>button]:float-right pr-2 items-center'> 
        <NavLink 
          to=""
          className={ ({ isActive }) => isActive ? activeNavButton : passiveNavButton } >
            Главная
        </NavLink>
        <HeaderAccount />
      </div>
    </header>
  )
}

export default Header

const headerStyle = `
  bg-white dark:bg-gray-900 
  border-b border-gray-200  dark:border-gray-500 
  p-4 `

const activeNavButton = `
  font-semibold
  bg-gray-300 
  text-slate-800 text-2xl
  mx-2 px-4 py-3`
const passiveNavButton = `
  font-semibold
  bg-gray-200 dark:bg-gray-900 
  text-slate-500 hover:text-slate-700 text-2xl
  mx-2 px-4 py-3`
