import CourseViewer, {
  ICourseViewer,
} from "../../common_components/course_viewer/courseViewer";

const data: ICourseViewer = {
  courseName: "Solidity Basics",
  courseDescription:
		"To start your journey in Solidity, all you need is a willingness to learn and a curious mind! Throughout this course, we will guide you step by step through the basics of Solidity. You'll gain a solid understanding of how to write smart contracts and unlock the potential of decentralized applications. Don't worry if you're new to coding – this course is designed for beginners and we'll explain everything in a non-technical and easy-to-understand way.\n\nWe will cover essential concepts in Solidity, such as variables, functions, control structures, and data types. You'll learn how to define and interact with smart contracts, enabling you to create self-executing agreements on the blockchain. We'll also explore the importance of contract security and best practices to ensure your code is robust and resistant to vulnerabilities.\n\nBy the end of this course, you'll have a strong foundation in Solidity and be ready to embark on your own blockchain development projects. So, get ready to dive into the exciting world of Solidity and discover the endless possibilities of decentralized applications!",
  courseThumbnail: "/superShadowyCoder.jpg",
  coursePrerequisites: ["Problem Solving"],
  lessons: [
    {
      lessonName: "Basic Data and storage types",
      lessonDescription:
				"In order to create a solid understanding of Solidity, and really any programming language, it is best to start off with the basics. In this lesson, we will be covering the basic data types in Solidity. These data types are the building blocks of any smart contract, and are essential to understand before moving on to more complex topics.\n\nIn this lesson you will learn about booleans, ints, strings and more before diving into more advanced datastructures in later lessons. With this knowledge, you will be able to start reading simple smart contracts written in Solidity and understand what is going on.\n\n No prior programming knowledge is required for this lesson!",
      lessonPath: "/solidity_lessons/chapter_1/1",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
      lessonPrerequisites: [],
    },
    {
      lessonName: "Mappings and Structs",
      lessonDescription:
				"Maps and Structs are more advanced data types in Solidity that you may encounter in more complex Smart Contracts. In this lesson, we will go over these data structures, their uses and some security pitfalls that can occur when using these structures in smart contract developement.",
      lessonPath: "/solidity_lessons/chapter_1/2",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
      lessonPrerequisites: [ "Basic Data Types", "Basic Structures" ],
    },
    {
      lessonName: "Functions",
      lessonDescription:
				"Learn about functions in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      lessonPath: "/solidity_lessons/chapter_1/3",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
      lessonPrerequisites: ["Basic Datatypes"],
    },
    {
      lessonName: "Functions",
      lessonDescription:
				"Learn about functions in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      lessonPath: "/solidity_lessons/chapter_1/3",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
      lessonPrerequisites: [],
    },
    {
      lessonName: "Functions",
      lessonDescription:
				"Learn about functions in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      lessonPath: "/solidity_lessons/chapter_1/3",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
      lessonPrerequisites: [],
    },
    {
      lessonName: "Functions",
      lessonDescription:
				"Learn about functions in Solidity Sint eveniet id rerum. Enim similique quaerat id nam voluptatem.",
      lessonPath: "/solidity_lessons/chapter_1/3",
      thumbnailPath: "https://i.imgur.com/3ZQc5nJ.png",
      lessonPrerequisites: [],
    },
  ],
};

const Page = () => {
  return (
    <CourseViewer
      courseName={data.courseName}
      courseDescription={data.courseDescription}
      courseThumbnail={data.courseThumbnail}
      coursePrerequisites={data.coursePrerequisites}
      lessons={data.lessons}
    />
  );
};

export default Page;
