
import BlogList from "./Blog1List";
import useFetch from "./usefetch";

const Home = () => {
  // const [name, setName] = useState("miro");
const {data : blogs , isPending , error} = useFetch( 'http://localhost:3000/blogs');


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading .......</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs !" />}
    </div>
  );
};

export default Home;
