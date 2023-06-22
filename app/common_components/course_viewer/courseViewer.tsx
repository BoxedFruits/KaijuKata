import Image from "next/image";
import LessonList, { ILessonItem } from "./lessonList";

export interface ICourseViewer {
  courseName: string;
  courseDescription: string;
  courseThumbnail: string;
  prerequisites?: string[];
  lessons: ILessonItem[];
}

const CourseViewer = ({ courseName, courseDescription, courseThumbnail, prerequisites, lessons }: ICourseViewer) => {
  return (
    <>
      <div className="flex grow flex-col md:flex-row bg-gradient-to-r from-zinc-600 to-zinc-800">
        <div className="left-side md:w-5/12 md:bg-zinc-800 p-5">
          <h1 className="mb-0 md:mb-7 text-6xl font-bold">{courseName}</h1>
          <div className="hidden md:block">
            <LessonList lessons={lessons} />
          </div>
        </div>
        <div className="right-side md:w-7/12 md:bg-zinc-700 p-5">
          <div className="course-info">
            <div className="mb-5 flex align-middle items-center justify-center">
              <Image src={courseThumbnail} alt="course thumbnail" width={200} height={200} />
            </div>
            <div className="px-5">
              <h2 className="text-4xl font-semibold">Course Objective</h2>
              <p>{courseDescription}</p>
              {prerequisites &&
                <div>
                  <h3>Prerequisites</h3>
                  <ul className="list-disc">
                    {prerequisites.map((prerequisite, index) => {
                      return (
                        <li className="mb-2" key={index}>{prerequisite}</li>
                      )
                    })
                    }
                  </ul>
                </div>
              }
            </div>
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