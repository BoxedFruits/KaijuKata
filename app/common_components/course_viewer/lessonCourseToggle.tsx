import Link from "next/link";

interface LessonCourseToggleProps {
  lessonToggle: boolean
  setLessonToggle: (fn: (prev: boolean) => boolean) => void
  lessonPath: string
}

const LessonCourseToggle = ({
  lessonToggle,
  setLessonToggle,
  lessonPath
}: LessonCourseToggleProps) => {
  const baseStyle = "text-sm py-1 px-2 shadow-inner";
  const selectedStyle = "bg-gray-300 text-black font-bold";
  const notSelectedStyle = "hover:font-bold";

  return (
    <div className="flex justify-between">
      <div>
        <button
          className={`rounded-bl-lg rounded-tl-lg ${baseStyle} ${lessonToggle ? selectedStyle : notSelectedStyle}`}
          onClick={() => setLessonToggle((prev) => !prev)}>
          Lesson
        </button>
        <button
          className={`rounded-tr-lg rounded-br-lg ${baseStyle} ${lessonToggle ? notSelectedStyle : selectedStyle}`}
          onClick={() => setLessonToggle((prev) => !prev)}>
          Course
        </button>
      </div>
      <div>
        <Link className='text-white text-sm font-medium' href={lessonPath}>
          <button className='py-1 px-2 text-sm bg-gray-300 rounded-lg text-red-600 font-bold'>Start Lesson</button>
        </Link>
      </div>
    </div>
  );
};

export default LessonCourseToggle;
