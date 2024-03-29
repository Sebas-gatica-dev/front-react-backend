import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
  const [blogs, setBlog] = useState([])
  useEffect(()=>{
      getBlogs()
  },[])

  //procedimiento para mostrar todos lo blogs
  const getBlogs = async () => {
        const res = await axios.get(URI)
        console.log(res.data)
        setBlog(res.data)
  }

  //prodecimiento para eliminar un blog
  const deleteBlog = async (id) => {
     await axios.delete(`${URI}${id}`)
     getBlogs();

  }

  return(
      <div className='container'>
        <div className='row'>
          <div className='col-12'> 
            <Link to="/create" className="btn btn-primary mt-2 mb-4"><h4>Crear tarea</h4></Link>
             <table className='table'>
               <thead className='table-primary'>
                   <tr>
                      <th>Tarea</th>
                      <th>Descripcion</th>
                      <th>Actions</th>
                    </tr>
               </thead>
               <tbody>
                 { blogs.map ( (blog) =>(
                   <tr key={blog.id}>
                       <td> {blog.title}  </td>
                       <td> {blog.content}  </td>
                       <td>   
                          <Link to={`/edit/${blog.id}`} className='btn btn-info'>Editar</Link>
                          <button onClick={ ()=>deleteBlog(blog.id)} className='btn btn-danger'>Delete</button>
                       </td>
                   </tr>

                 ))}
               </tbody>
             </table>
          </div>
        </div>
      </div>
  )
}

export default CompShowBlogs