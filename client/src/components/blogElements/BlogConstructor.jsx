import Paragraph from './Paragraph'
import Youtube from './Youtube'
import Image from './Image'
import Heading from './Heading'
import Header from './Header'
import { useBlogConstructor } from '../../utilities/zustand'


const BlogConstructor = () => {
  const { blogElements } = useBlogConstructor()

  return blogElements.map((blog, index) => {
    switch (blog.type) {
      case 'header':
        return (
          <Header
            key={index}
          />
        ) 
      case 'image':
        return (
          <Image
            index={index}
            key={index}
          />
        ) 
      case 'youtube':
        return (
          <Youtube
            index={index}
            key={index}
          />
        ) 
      case 'paragraph':
        return (
          <Paragraph
            index={index}
            key={index}
          />
        ) 
      case 'heading':
        return (
          <Heading
            index={index}
            key={index}
          />
        ) 
      default:
        return (
          <div key={index}>
            {`'${blog}' - not implemented`}
          </div>
        ) 
    }
  })
} 

export default BlogConstructor