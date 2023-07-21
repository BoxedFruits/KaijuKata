interface LessonCourseToggleProps {
	lessonToggle: boolean
	setLessonToggle: (fn: (prev: boolean) => boolean) => void
}

const LessonCourseToggle = ({
  lessonToggle,
  setLessonToggle,
}: LessonCourseToggleProps) => {
  const baseStyle = "text-sm py-1 px-2 shadow-inner";
  const selectedStyle = "bg-gray-300 text-black font-bold";
  const notSelectedStyle = "hover:font-bold";

  return (
    <>
      <button
        className={`rounded-bl-lg rounded-tl-lg ${baseStyle} ${
          lessonToggle ? selectedStyle : notSelectedStyle
        }`}
        onClick={() => setLessonToggle((prev) => !prev)}
      >
				Lesson
      </button>
      <button
        className={`rounded-tr-lg rounded-br-lg ${baseStyle} ${
          lessonToggle ? notSelectedStyle : selectedStyle
        }`}
        onClick={() => setLessonToggle((prev) => !prev)}
      >
				Course
      </button>
    </>
  );
};

export default LessonCourseToggle;
