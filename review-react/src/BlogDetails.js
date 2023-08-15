import {useParams} from 'react-router-dom';
import useFetch from "./usefetch";
import {useHistory} from "react-router-dom";

const BlogDetails = () => {
 const {id} = useParams(); 
 const {data : blog , isPending , error} = useFetch( 'http://localhost:3000/blogs/' + id);
 const history =useHistory();

 const handleClick = () =>{
  fetch('http://localhost:3000/blogs/'+ blog.id , {
    method:'DELETE',
}).then (()=> {
  history.push('/');
})
 }


     return (  
        <div className="blog-details">
       {error && <div>{error}</div>}
      {isPending && <div>Loading .......</div>}
      {blog && (
        <article>
            <h2> {blog.title}</h2>
            <p> written by {blog.author}</p>
            <div> {blog.body }</div>
            <button onClick={handleClick}>Delete Blog</button>
        </article>
      ) }
        </div>
    );
}
 
export default BlogDetails;