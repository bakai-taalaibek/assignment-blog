import { useBlogConstructor } from '../../utilities/zustand'

export const Youtube = ({ index }) => {
  const { blogElements, remove, moveDown, moveUp, update } = useBlogConstructor()

  return (    
    <div className='flex  flex-wrap items-center m-2 text-lg'>
      <span className='font-bold '>Ютуб видео:</span>        
      <textarea className={ input }
        placeholder='Пожалуйста введите ссылку на ютуб видео в формате https://www.youtube.com/watch?v=i3IE9k8IOZU или https://www.youtube.com/embed/i3IE9k8IOZU '
        value={blogElements[index].content}
        onChange={(event) => update(event.target.value.replace('watch?v=', 'embed/'), index)}
      ></textarea>
      <button className={ button } onClick={() => moveUp(index)}>Вверх</button>
      <button className={ button } onClick={() => remove(index)}>Удалить</button>
      <button className={ button } onClick={() => moveDown(index)}>Вниз</button>
      <a 
        className='ml-80 text-blue-700 font-bold' 
        href='https://youtube.com/' 
        target='_blank' 
        rel='noreferrer'>
          youtube.com
      </a>
    </div>
  )
}

export default Youtube

const input = `
w-7/12 flex flex-even
border border-gray-700
m-3 p-1`

const button = `
  bg-gray-200 
  font-semibold text-gray-800 hover:text-gray-600 
  p-2 m-1 `