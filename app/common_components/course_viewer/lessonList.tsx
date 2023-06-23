import Link from "next/link";

export interface ILessonItem {
  lessonName: string;
  lessonDescription: string;
  lessonPath: string;
  thumbnailPath: string;
}

interface LessonListProps {
  lessons: ILessonItem[];
}

const LessonList = ({ lessons }: LessonListProps) => {
  return (
    <>
      <ol className="lesson-list px-8 pb-8 pt-0 mx-8 mb-8 mt-6">
        {lessons.map((lesson, index) => {
          return (
            <Link href={lesson.lessonPath} key={index}>
              <li className="mb-6 bg-zinc-900 p-2 rounded-xl border-solid border-2 border-orange-700" key={index}>
                <div className="lesson-item flex items-center">
                  <div className="lesson-thumbnail mr-2">
                    <img src={lesson.thumbnailPath} alt={lesson.lessonName} />
                  </div>
                  <div className="lesson-info">
                    <h3 className="text-xs font-medium mb-1">{lesson.lessonName}</h3>
                    <p className="text-xs mb-0">{lesson.lessonDescription}</p>
                  </div>
                </div>
              </li>
            </Link>
          )
        })}
      </ol>
    </>
  )
}

export default LessonList;