import { Link } from "react-router-dom";




const ContentManage = () => {

  


    return (
        <div className="flex justify-end my-5">
         <Link to={`add-blog`}>  <button className="btn btn-primary">Add Blog</button> </Link>
        </div>
    );
};

export default ContentManage;