export interface ILessonItem {
	lessonName: string
	lessonDescription: string
	lessonPath: string
	lessonPrerequisites: string[]
	thumbnailPath: string
}

interface LessonListProps {
	lessons: ILessonItem[]
	currentLesson: ILessonItem | null
	setCurrentLesson: (lesson: ILessonItem | null) => void
}

const LessonList = ({
  lessons,
  currentLesson,
  setCurrentLesson,
}: LessonListProps) => {
  return (
    <>
      <ol className='lesson-list'>
        {lessons.map((lesson, index) => {
          return (
            <li
              className='mb-6 bg-[#B96060] p-2 rounded-xl flex'
              key={index}
              onClick={() => setCurrentLesson(lesson)}
            >
              <div className='lesson-item flex'>
                <div className='lesson-thumbnail mr-2 min-w-[30%] flex items-center'>
                  <img
                    src={lesson.thumbnailPath}
                    alt={lesson.lessonName}
                    className='rounded-xl'
                  />
                </div>
                <div className='lesson-info h-[100px] overflow-hidden'>
                  <h3 className='text-sm font-bold mb-1'>
                    {lesson.lessonName}
                  </h3>
                  <p className='text-xs h-full'>
                    {lesson.lessonDescription}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default LessonList;
