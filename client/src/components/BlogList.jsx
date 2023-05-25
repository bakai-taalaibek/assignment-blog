import { Link } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { usePage } from '../utilities/zustand'

const BlogList = () => {
  const queryClient = useQueryClient()
  const { setPage, page } = usePage()
  const cachedResult = queryClient.getQueryData(['blogs', page])

  const dateTransform = (ISOdate) => {
    const data = new Date(ISOdate)
    return data.toLocaleDateString('ru')
  }

  const handlePageChange = (number) => {
    setPage(number)
    queryClient.invalidateQueries('blogs')
  }

  const Buttons = () => {
    const numberOfButtons = Array.from(Array(cachedResult.pages).keys())
    return (
      numberOfButtons.map(number => {
        return (
          <button 
            className='px-5 py-2 bg-slate-200 m-1' 
            onClick={ () => handlePageChange(number + 1) }
            key={ number } > { number + 1 } </button>
        )
      })
    )
  }

  return (
    <div>
      < Buttons />
      { cachedResult.blogs.map((blog, index) => {
        return (
          <div className={ oneBlog } key={ index }>
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
        )
      }) }
      < Buttons />
    </div>
  )
}

export default BlogList

const oneBlog =`
  w-10/12 
  flex flex-col
  shadow-lg 
  rounded-md 
  bg-sky-50 
  m-2 my-4 mx-auto p-1 [&>*]:m-2`