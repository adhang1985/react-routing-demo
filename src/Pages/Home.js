import React, { useEffect, useState } from 'react'
import Blog from './Blog';

const Home = () => {

  const [blogs,setBlogs] = useState();
  const URL = "https://jsonplaceholder.typicode.com/posts";


  useEffect(() =>{
    getAllblogs(URL);
},[])

  const getAllblogs = async(url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data); 
            setBlogs(data);
        } catch (error) {
            console.log(error);
        }
  }

  

  return (
    <div className='container'>
       <h1>List of Blogs</h1>
       <div className='row'>
        {
            blogs && blogs.map((blog) => {
                return (<Blog blog={blog} key={blog.id}/>)
            })
        }
       </div>
    </div>
  )
}

export default Home
