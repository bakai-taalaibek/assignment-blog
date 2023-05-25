import { useBlogForm, useBlogConstructor, usePage } from '../utilities/zustand'
import BlogConstructor from './blogElements/BlogConstructor'
import blogService from '../services/blogs'
import { blogRecreated } from './blogRecreated'
import { useQueryClient } from 'react-query'

const CreateBlog = () => {
  const { setBlogForm } = useBlogForm()
  const { blogElements, reset, addElement, blogEditHelper, setBlogEditHelper } = useBlogConstructor()
  const queryClient = useQueryClient()
  const { page } = usePage()

  const handleSubmit = async () => {
    await blogService.create(blogElements)
    queryClient.invalidateQueries(['blogs', page])
    queryClient.invalidateQueries('usersBlogs')
    reset()    
  }

  const handleSaveChanges = async () => {
    const newBlog = { dateAdded: blogEditHelper.dateAdded, blogPost: blogElements }
    await blogService.update(newBlog, blogEditHelper.id)
    queryClient.invalidateQueries(['blogs', page])
    queryClient.invalidateQueries('usersBlogs')
    setBlogEditHelper(false, '', '')
    reset()    
  }

  return (
    <div >
      <button 
        onClick={ () => setBlogForm(false) } 
        className={ button + 'bg-gray-200 '}>
          Открыть лист моих блогов
      </button>
      <div className='font-semibold text-3xl text-blue-800 mb-3'>Создать блог</div>

      <BlogConstructor className='w-full '/>
      <button className={ button } onClick={() => addElement('heading')}>Добавить подзаголовок</button>
      <button className={ button } onClick={() => addElement('paragraph')}>Добавить абзац</button>
      <button className={ button } onClick={() => addElement('image')}>Добавить ссылку на изображение</button>
      <button className={ button } onClick={() => addElement('youtube')}>Добавить ссылку на Youtube видео</button>
      
      <button 
        onClick={ () => reset() } 
        className={ button + 'bg-red-600 text-gray-50'}>
          Обнулить
      </button>
      { blogEditHelper.status 
        ? <button 
            className={ button + 'bg-cyan-400 text-gray-50'}
            onClick={handleSaveChanges}>
              Сохранить изменения
          </button>
        : <button 
            className={ button + 'bg-green-600 text-gray-50'}
            onClick={handleSubmit}>
              Сохранить
          </button> }
      {blogRecreated(blogElements)}
    </div>
  ) 
}
  

export default CreateBlog

const button = `
  bg-gray-200 
  font-semibold text-gray-800 hover:text-gray-600 
  p-2 m-1 `








