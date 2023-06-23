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
      <div className="flex grow flex-col h-full md:h-auto md:flex-row bg-gradient-to-r from-zinc-600 to-zinc-800">
        <video className="absolute w-full z-0" muted style={{objectFit: "fill", height: "-webkit-fill-available; height: -moz-available; height: fill-available"}}>
          <source src="/sorashima.mp4" type="video/mp4" />
        </video>
        <div className="left-side md:w-5/12 p-8 z-10 md:overflow-auto bg-zinc-900/80">
          <h1 className="mb-0 md:mb-5 md:mt-16 md:ml-6 text-4xl font-semibold">{courseName}</h1>
          <div className="hidden md:block">
            <LessonList lessons={lessons} />
          </div>
        </div>
        <div className="right-side md:w-7/12 px-8 pt-4 pb-8 z-10 md:bg-zinc-900/95 md:overflow-auto">
          <div className="course-info p-8">
            <div className="mb-5 flex align-middle items-center justify-center">
              <div className="thumbnail w-50">
                <img src={courseThumbnail} alt="course thumbnail" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
            </div>
            <div className="px-5 mt-8">
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