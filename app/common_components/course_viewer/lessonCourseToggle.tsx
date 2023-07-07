interface LessonCourseToggleProps {
	lessonToggle: boolean
	setLessonToggle: (fn: (prev: boolean) => boolean) => void
}

const LessonCourseToggle = ({
  lessonToggle,
  setLessonToggle,
}: LessonCourseToggleProps) => {
  if (lessonToggle == true) {
    return (
      <>
        <button
          className='text-sm py-1 px-2 rounded-tl-lg rounded-bl-lg bg-gray-300 text-black shadow-inner font-bold'
          onClick={() => setLessonToggle((prev) => !prev)}
        >
					Lesson
        </button>
        <button
          className='text-sm py-1 px-2 rounded-tr-lg rounded-br-lg shadow-inner hover:font-bold'
          onClick={() => setLessonToggle((prev) => !prev)}
        >
					Course
        </button>
      </>
    );
  } else
    return (
      <>
        <button
          className='text-sm py-1 px-2 rounded-tl-lg rounded-bl-lg shadow-inner hover:font-bold'
          onClick={() => setLessonToggle((prev) => !prev)}
        >
					Lesson
        </button>
        <button
          className='text-sm py-1 px-2 rounded-tr-lg rounded-br-lg bg-gray-300 text-black shadow-inner font-bold'
          onClick={() => setLessonToggle((prev) => !prev)}
        >
					Course
        </button>
      </>
    );
};

export default LessonCourseToggle;
