import Image from "next/image";
import LessonList, { ILessonItem } from "./lessonList";

export interface ICourseViewer {
  courseName: string;
  courseDescription: string;
  courseThumbnail: string;
  lessons: ILessonItem[];
}

const CourseViewer = ({ courseName, courseDescription, courseThumbnail, lessons }: ICourseViewer) => {
  return (
    <>
      <div className="flex grow flex-col md:flex-row bg-gradient-to-r from-zinc-800 to-zinc-700">
        <div className="left-side md:w-5/12 md:bg-zinc-800 p-5">
          <h1 className="mb-0 md:mb-7">{courseName}</h1>
          <div className="hidden md:block">
            <LessonList lessons={lessons} />
          </div>
        </div>
        <div className="right-side md:w-7/12 md:bg-zinc-700 p-5">
          <div className="course-info">
            <div className="mb-5">
              <Image src={courseThumbnail} alt="course thumbnail" width={200} height={200} />
            </div>{/* eventually have thumbnail */}
            <h2 className="text-4xl">Course Objective</h2>
            <p>{courseDescription}</p>
          </div>
          <div className="md:hidden">
            <LessonList lessons={lessons} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseViewer;