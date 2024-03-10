import React from 'react'

const Blog = (props) => {
 
    const {title,body} = props.blog;

  return (
    <div className='col-md-12'>
       <h3>{title}</h3>
       <p>{body}</p>
    </div>
  )
}

export default Blog
