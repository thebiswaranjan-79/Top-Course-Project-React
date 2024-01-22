import react from 'react';
import {FcLike} from "react-icons/fc"
import { toast } from 'react-toastify';
const Card = (props) =>{
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikeCourses = props.setLikeCourses;
    function clickHandler(){
        //Logic Kya hoga
        if(likedCourses.includes(course.id)){
            setLikeCourses ((prev) => prev.filter((cid !== course.id) ) );
            toast.warning("Llike Removed !!!");
        }else{
            //Pehle se LIke nhi hai ye course 
            //insert karna hai ye course liked course mi
            if(likedCourses.length === 0){
                setLikeCourses([course.id]);
            }else{
                //non-empty phle se hai
                setLikeCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully...")

        }
            
    }
    return(
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-ms overflow-hidden'>
            <div className='relative'>
                <img src = {course.image.url}></img>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-2 
                grid place-items-center'>
                    <button onClick={clickHandler}>
                        <FcLike fontSize = "1.75rem"/>
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description}</p>
            </div>
        </div>
    )
}

export default Card