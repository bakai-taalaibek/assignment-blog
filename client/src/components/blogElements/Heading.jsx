import { useBlogConstructor } from '../../utilities/zustand'

export const Heading = ({ index }) => {
  const { blogElements, remove, moveDown, moveUp, update } = useBlogConstructor()

  return (    
    <div className='flex items-center m-2 text-lg'>
      <span className='font-bold '>Подзаголовок:</span>
      <textarea className={ input }
        placeholder='Введите подзаголовок'
        value={blogElements[index].content}
        onChange={(event) => update(event.target.value, index)}
      ></textarea>
      <button className={ button } onClick={() => moveUp(index)}>Вверх</button>
      <button className={ button } onClick={() => remove(index)}>Удалить</button>
      <button className={ button } onClick={() => moveDown(index)}>Вниз</button>
    </div>
  )
}


export default Heading

const input = `
w-7/12 flex flex-even
border border-gray-700
m-3 p-1`

const button = `
  bg-gray-200 
  font-semibold text-gray-800 hover:text-gray-600 
  p-2 m-1 `