import CourseViewer, { ICourseViewer } from "../common_components/course_viewer/courseViewer";

const data: ICourseViewer = {
  courseName: "Solidity Basics",
  courseDescription: "Learn the basics of Solidity blah blah blah Enim similique quaerat id nam voluptatemEnim similique quaerat id nam voluptatemEnim similique quaerat id nam voluptatemEnim similique quaerat id nam voluptatem",
  courseThumbnail: "https://i.imgur.com/Jvh1OQm.jpeg",
  lessons: [
    { 
      lessonName: "Basic Datatypes",
      lessonDescription: "Learn about the basic datatypes in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem. ",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png"
   }, {
      lessonName: "Maps and Structs",
      lessonDescription: "Learn about map datastructure in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png"
   },{
      lessonName: "Functions",
      lessonDescription: "Learn about functions in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png"
   }

  ]
}

const Page = () => {
  return (
    <CourseViewer 
      courseName={data.courseName} 
      courseDescription={data.courseDescription} 
      courseThumbnail={data.courseThumbnail}
      lessons={data.lessons} 
    />
  )
}

export default Page;