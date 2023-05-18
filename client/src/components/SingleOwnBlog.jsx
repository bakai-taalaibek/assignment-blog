import { useParams } from "react-router-dom"
import { blogRecreated } from "./blogRecreated"
import { useQueryClient } from 'react-query'
import { usePage } from '../utilities/zustand'

const SingleBlog = () => {
  const queryClient = useQueryClient()
  const { blogId } = useParams()
  const { page } = usePage()

  let results = queryClient.getQueryData('usersBlogs')
  const currentBlog = results.blogs.find(blog => blog.id === blogId)

  const dateTransform = (ISOdate) => {
    const data = new Date(ISOdate)
    return data.toLocaleDateString('ru')
  }

  return (
    <div>
      <div 
        className='ml-8 text-left text-2xl text-slate-800 '>
          Автор: { currentBlog.user.username }, создано: { dateTransform(currentBlog.dateAdded) }
      </div>
      {blogRecreated(currentBlog.blogPost)}
    </div>
  )
}

export default SingleBlog