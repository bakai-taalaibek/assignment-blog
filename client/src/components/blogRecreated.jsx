export const blogRecreated = (array) => {
  return (array.map((element) => {
            switch (element.type) {
              case 'header':
                return <h2 className='font-semibold text-5xl my-10 mx-5'>{element.content}</h2> 
              case 'paragraph':
                return <div className='text-left mx-6 my-5 text-xl'>{element.content}</div> 
              case 'image':
                return <img className='mx-auto my-5' src={element.content} alt='' /> 
              case 'youtube':
                return (
                  <iframe
                    className='my-5 mx-auto'
                    width='853'
                    height='480'
                    src={element.content}
                    allowFullScreen
                    title='Embedded youtube'
                  />
                ) 
              case 'heading':
                return <h4 className='font-semibold text-3xl my-7 mx-5'>{element.content}</h4> 
              default:
                return 'Unexpected element' 
            }
          })
  )
}