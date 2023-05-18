import CreateBlog from './CreateBlog'
import { useBlogForm, usePage } from '../utilities/zustand'
import { useQueryClient, useMutation, useQuery } from 'react-query'
import { useUser, useBlogConstructor } from '../utilities/zustand'
import blogService from '../services/blogs'
import { Link } from 'react-router-dom'

const ProfileList = () => {
  const { setBlogElements, setBlogEditHelper } = useBlogConstructor()
  const { blogForm, setBlogForm } = useBlogForm()
  const { user } = useUser()
  const queryClient = useQueryClient()
  const { page } = usePage()

  const { isLoading, data } = useQuery('usersBlogs', () => blogService.getUsersBlogs(user.username)) 

  const newMutation = useMutation(blogService.remove, {
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs', page])
      queryClient.invalidateQueries('usersBlogs')
    }
  })

  if (isLoading) {
    return <div className='text-3xl text-slate-700 mt-10'>Loading...</div>
  }

    const handleDelete = async (id) => {
    if (window.confirm('Вы уверены что хотите удалить данный блог?')) {
      newMutation.mutate(id)
    }
  }

  const handleEdit = async (blog) => {
    setBlogForm(true)
    setBlogElements(blog.blogPost)
    setBlogEditHelper(true, blog.dateAdded, blog.id)
  }

  const dateTransform = (ISOdate) => {
    const data = new Date(ISOdate)
    return data.toLocaleDateString('ru')
  }

  return (
    <div>
      { !blogForm
        ? <>
            <button 
              onClick={() => setBlogForm(true)} 
              className='bg-gray-200 text-gray-800 hover:text-gray-600 p-2 font-semibold '>
                Создать новый блог
            </button>
            <div className='text-4xl text-green-700 mt-5 font-bold'>Ваши блоги:</div>

            { data.blogs.map((blog) => {
              return (
                <div className='mb-4 mt-1 flex justify-center items-center flex-wrap md:flex-nowrap' key={ blog.id }>
                  <div className={ oneBlog } >
                    <Link 
                      className='text-3xl font-bold text-blue-800' 
                      to={`blog/${blog.id}`} >
                        { blog.blogPost[0].content }
                    </Link>
                    <span 
                      className='text-md'>
                        Автор: { blog.user.username }, создано: { dateTransform(blog.dateAdded) }
                    </span>
                  </div> 

                  <button 
                    className='bg-orange-300 mx-2 h-14 px-2' 
                    onClick={ () => handleEdit(blog) }  >Редактировать</button>
                  <button 
                    className='bg-red-300 mx-2 h-14 px-2' 
                    onClick={ () => handleDelete(blog.id) } >Удалить</button>
                </div>
              )
            }) }
          </>
        : <CreateBlog />
      }
    </div>
  )
}

export default ProfileList

const oneBlog =`
  w-11/12 md:min-w-[calc(450px)] 
  flex flex-col 
  shadow-lg 
  rounded-md 
  bg-sky-50 
  my-2 mx-5  p-2 [&>*]:m-2`