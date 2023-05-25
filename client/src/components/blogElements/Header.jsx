import { useBlogConstructor } from '../../utilities/zustand'

export const Heading = () => {
  const { blogElements, updateHeader } = useBlogConstructor()

  return (    
    <div className='flex items-center m-2 text-lg'>
      <span className='font-bold '>Заголовок:</span>         
      <textarea className={ input }
        value={blogElements[0].content}
        onChange={(event) => updateHeader(event.target.value)}
      ></textarea>
    </div>
  )
}


export default Heading

const input = `
w-7/12 flex flex-even
border border-gray-700
m-3 p-1`
