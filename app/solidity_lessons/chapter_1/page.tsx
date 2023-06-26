import CourseViewer, {
  ICourseViewer,
} from "../../common_components/course_viewer/courseViewer";

const data: ICourseViewer = {
  courseName: "Solidity Basics",
  courseDescription:
		"Learn the basics of Solidity blah blah blah Enim similique quaerat id nam voluptatemEnim similique quaerat id nam voluptatemEnim similique quaerat id nam voluptatemEnim similique quaerat id nam voluptatemvoluptatemEnim similique quaerat id nam voluvoluptatemEnim similique quaerat id nam voluvoluptatemEnim similique quaerat id nam volu",
  courseThumbnail: "/superShadowyCoder.jpg",
  prerequisites: [ "Basic Programming", "Basic Javascript" ],
  lessons: [
    {
      lessonName: "Basic Datatypes",
      lessonDescription:
				"Learn about the basic datatypes in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem. ",
      lessonPath: "/solidity_lessons/chapter_1/1",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
    },
    {
      lessonName: "Maps and Structs",
      lessonDescription:
				"Learn about map datastructure in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      lessonPath: "/solidity_lessons/chapter_1/2",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
    },
    {
      lessonName: "Functions",
      lessonDescription:
				"Learn about functions in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      lessonPath: "/solidity_lessons/chapter_1/3",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
    },
    {
      lessonName: "Functions",
      lessonDescription:
				"Learn about functions in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      lessonPath: "/solidity_lessons/chapter_1/3",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
    },
    {
      lessonName: "Functions",
      lessonDescription:
				"Learn about functions in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      lessonPath: "/solidity_lessons/chapter_1/3",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
    },
    {
      lessonName: "Functions",
      lessonDescription:
				"Learn about functions in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      lessonPath: "/solidity_lessons/chapter_1/3",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
    },
  ],
};

const Page = () => {
  return (
    <CourseViewer
      courseName={data.courseName}
      courseDescription={data.courseDescription}
      courseThumbnail={data.courseThumbnail}
      prerequisites={data.prerequisites}
      lessons={data.lessons}
    />
  );
};

export default Page;
