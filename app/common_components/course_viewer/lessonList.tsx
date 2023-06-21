export interface ILessonItem {
  lessonName: string;
  lessonDescription: string;
  thumbnailPath: string;
}

interface LessonListProps {
  lessons: ILessonItem[];
}

const LessonList = ({ lessons }: LessonListProps) => {
  return (
    <>
      <ol className="lesson-list">
        {lessons.map((lesson, index) => {
          return (
            <li className="mb-6 bg-zinc-700 p-2 rounded-xl" key={index}>
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
          )
        })}
      </ol>
    </>
  )
}

export default LessonList;