import LessonList, { ILessonItem } from "./lessonList";

export interface ICourseViewer {
	courseName: string
	courseDescription: string
	courseThumbnail: string
	prerequisites?: string[]
	lessons: ILessonItem[]
}

const CourseViewer = ({
  courseName,
  courseDescription,
  courseThumbnail,
  prerequisites,
  lessons,
}: ICourseViewer) => {
  return (
    <>
      <div className='flex grow flex-col h-full md:h-auto md:flex-row bg-gradient-to-r from-zinc-600 to-zinc-800'>
        <div className='left-side pt-4 pl-7 md:overflow-auto md:w-5/12 md:bg-zinc-800'>
          <div className='flex items-center justify-between'>
            <h1 className='mb-0 text-2xl text-black md:mb-7 md:text-6xl md:text-white'>
              {courseName}
            </h1>
            <div className='pr-7 md:hidden'>
              <button className='text-sm py-1 px-2 rounded-tl-lg rounded-bl-lg border border-black'>
								Lesson
              </button>
              <button className='text-sm py-1 px-2 rounded-tr-lg rounded-br-lg border border-black'>
								Course
              </button>
            </div>
          </div>

          <div className='hidden md:block'>
            <LessonList lessons={lessons} />
          </div>
        </div>
        <div className='right-side px-7 pt-5 md:pt-20 md:w-7/12 md:bg-zinc-700 md:overflow-auto'>
          <div className='course-info'>
            <div className='mb-5 flex align-middle items-center justify-center'>
              <div className='relative flex'>
                <div className='hidden z-20 md:block md:absolute top-[-3rem] left-0'>
                  <button className='text-sm py-1 px-2 rounded-tl-lg rounded-bl-lg border border-black'>
										Lesson
                  </button>
                  <button className='text-sm py-1 px-2 rounded-tr-lg rounded-br-lg border border-black'>
										Course
                  </button>
                </div>
                <img
                  src={courseThumbnail}
                  alt='course thumbnail'
                  className='rounded-lg object-cover md:max-w-[50%]'
                />
                <div className='hidden md:flex flex-col pl-6'>
                  <p className='absolute top-[-1.5rem] font-semibold'>
										Completed:{" "}
                    <span className='font-normal'>No</span>
                  </p>
                  <h1 className='text-5xl font-medium'>
                    {courseName}
                  </h1>
                  {prerequisites && (
                    <div className='font-medium text-[15px]'>
                      <h3 className='mb-1'>
												Prerequisites
                      </h3>
                      <ul className='list-disc'>
                        {prerequisites.map(
                          (prerequisite, index) => {
                            return (
                              <li
                                className='ml-6 font-normal'
                                key={index}
                              >
                                {prerequisite}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* MD SCREENS */}
            <div className='hidden md:block'>
              <h2>Course Summary</h2>
              <p>{courseDescription}</p>
              <p className='italic'>
								Contributors: BoxedFruit, Nizzle
              </p>
            </div>

            {/* SM SCREENS */}
            <div className='md:hidden'>
              <h2 className='text-3xl font-medium'>
								Lesson Summary
              </h2>
              <p>{courseDescription}</p>
              <p className='font-semibold'>
								Completed:
                <span className='font-normal'> No</span>
              </p>
              <p className='italic text-sm'>
								Contributors: BoxedFruit, Nizzle
              </p>
              {prerequisites && (
                <div>
                  <h3 className='mb-1 font-medium'>
										Prerequisites
                  </h3>
                  <ul className='list-disc'>
                    {prerequisites.map(
                      (prerequisite, index) => {
                        return (
                          <li
                            className='ml-6 font-normal'
                            key={index}
                          >
                            {prerequisite}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              )}
              <h3 className='font-medium'>Related Courses</h3>
              <div className='flex mb-4 w-[100%]'>
                <div>
                  <img
                    src={courseThumbnail}
                    alt='Course thumbnail'
                    className='rounded-tl-lg rounded-bl-lg max-h-[150px] '
                  />
                </div>
                <div className='bg-[#B96060] rounded-tr-lg rounded-br-lg px-4 py-4 max-h-[150px]'>
                  <h4 className='text-xs mb-2 text-black'>
										Lesson Name
                  </h4>
                  <p className='text-[10px] leading-none'>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='md:hidden'>
            <LessonList lessons={lessons} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseViewer;
