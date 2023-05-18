import { useBlogConstructor } from '../../utilities/zustand'

export const Image = ({ index }) => {
  const { blogElements, remove, moveDown, moveUp, update } = useBlogConstructor()

  return (    
    <div className='flex flex-wrap items-center m-2 text-lg'>
      <span className='font-bold '>Изображение:</span>        
      <textarea className={ input }
        placeholder='Пожалуйста введите ссылку на изображение в формате https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg'
        value={blogElements[index].content}
        onChange={(event) => update(event.target.value, index)}
      ></textarea>
      <button className={ button } onClick={() => moveUp(index)}>Вверх</button>
      <button className={ button } onClick={() => remove(index)}>Удалить</button>
      <button className={ button } onClick={() => moveDown(index)}>Вниз</button>
      <a 
        className='ml-80 text-blue-700 font-bold' 
        href='https://pixabay.com/ru/' 
        target='_blank' 
        rel='noreferrer'>
          pixabay.com
      </a>
    </div>
  )
}

export default Image

const input = `
w-7/12 flex flex-even
border border-gray-700
m-3 p-1`

const button = `
  bg-gray-200 
  font-semibold text-gray-800 hover:text-gray-600 
  p-2 m-1 `