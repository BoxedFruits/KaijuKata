"use client";

import { useState, useEffect } from "react";
import LessonList, { ILessonItem } from "./lessonList";
import LessonCourseToggle from "./lessonCourseToggle";

export interface ICourseViewer {
  courseName: string
  courseDescription: string
  courseThumbnail: string
  coursePrerequisites?: string[]
  lessons: ILessonItem[]
}

const CourseViewer = ({
  courseName,
  courseDescription,
  courseThumbnail,
  coursePrerequisites,
  lessons,
}: ICourseViewer) => {
  const [ lessonToggle, setLessonToggle ] = useState<boolean>(true);
  const [ currentLesson, setCurrentLesson ] = useState<ILessonItem | null>(lessons[0]);

  const displayPreRequisites = (coursePrerequisites?: string[]) => {
    if (!coursePrerequisites) return null;
    return (
      <>
        <h3 className='mb-1 font-medium text-[15px]'>Prerequisites</h3>
        {coursePrerequisites.map(
          (coursePrerequisites: string, index: number) => {
            return (
              <li className='ml-6 font-light text-sm' key={index}>
                {coursePrerequisites}
              </li>
            );
          }
        )}
      </>
    );
  };

  const displayRelatedCourses = () => {
    return (
      <div>
        <h3 className='font-medium mb-0'>Related Courses</h3>
        <div className='flex mb-4'>
          <div>
            <img
              src={courseThumbnail}
              alt='Course thumbnail'
              className='rounded-tl-lg rounded-bl-lg max-h-[150px] '
            />
          </div>
          <div className='bg-[#B96060] rounded-tr-lg rounded-br-lg px-4 py-4 max-h-[150px] w-full'>
            <h4 className='text-xs mb-2 text-black'>Lesson Name</h4>
            <p className='text-[10px] leading-none'>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='flex grow flex-col h-full md:h-auto md:flex-row bg-gradient-to-r from-zinc-600 to-zinc-800'>
        <div className='left-side pt-4 pl-6 pr-6 md:overflow-auto md:w-5/12 md:bg-zinc-800'>
          <div className='flex items-center justify-between'>
            <h1 className='mb-0 text-3xl font-medium md:hidden'>
              {lessonToggle && currentLesson
                ? currentLesson.lessonName
                : courseName}
            </h1>
            <h1 className='hidden md:block md:mb-7 md:text-5xl'>
              {courseName}
            </h1>
            <div className='min-w-[150px] md:hidden'>
              <LessonCourseToggle
                lessonToggle={lessonToggle}
                setLessonToggle={setLessonToggle}
              />
            </div>
          </div>
          <div className='hidden w-full md:block'>
            <LessonList
              lessons={lessons}
              currentLesson={currentLesson}
              setCurrentLesson={setCurrentLesson}
            />
          </div>
        </div>
        <div className='right-side px-7 pt-5 md:pt-20 md:w-7/12 md:bg-zinc-700 md:overflow-auto'>
          <div className='course-info'>
            <div className='mb-5 flex align-middle items-center justify-center'>
              <div className='relative flex grow'>
                <div className='hidden z-20 md:block md:absolute top-[-3rem] left-0'>
                  <LessonCourseToggle
                    lessonToggle={lessonToggle}
                    setLessonToggle={setLessonToggle}
                  />
                </div>
                <div className='absolute top-4 left-4 backdrop-blur-2xl rounded-lg p-2'>
                  <p className='font-semibold m-0'>
                    Completed:
                    <span className='font-normal'> No</span>
                  </p>
                </div>

                <img
                  src={
                    currentLesson
                      ? currentLesson.thumbnailPath
                      : courseThumbnail
                  }
                  alt='course thumbnail'
                  className='rounded-xl object-cover w-full md:w-5/12'
                />

                <div className='hidden md:flex flex-col p-4 ml-2 rounded-xl whitespace-pre-wrap bg-black opacity-80 md:w-7/12'>
                  <h1 className='text-5xl font-medium'>
                    {lessonToggle
                      ? currentLesson?.lessonName
                      : courseName}
                  </h1>
                  <ul className='list-disc'>
                    {displayPreRequisites(
                      coursePrerequisites
                    )}
                  </ul>
                  <p className='italic text-[10px] absolute bottom-0'>
                    Contributors: BoxedFruit, Nizzle
                  </p>
                </div>
              </div>
            </div>

            {/* MD SCREENS */}
            <div className='hidden md:block bg-black opacity-80 p-4 rounded-xl mb-4'>
              <h2 className='text-[40px] font-medium mb-6'>
                {lessonToggle
                  ? "Lesson Summary"
                  : "Course Summary"}
              </h2>
              <p className='mb-1 whitespace-pre-line'>
                {lessonToggle
                  ? currentLesson?.lessonDescription
                  : courseDescription}
              </p>
            </div>

            <div className='hidden md:block'>
              {displayRelatedCourses()}
            </div>

            {/* SM SCREENS */}
            <div className='md:hidden'>
              <h2 className='text-3xl font-medium'>
                {lessonToggle
                  ? "Lesson Summary"
                  : "Course Summary"}
              </h2>
              <p className='whitespace-pre-line'>
                {lessonToggle
                  ? currentLesson?.lessonDescription
                  : courseDescription}
              </p>

              <ul className='list-disc'>
                {displayPreRequisites(coursePrerequisites)}
              </ul>

              <p className='italic text-xs'>
                Contributors: BoxedFruit, Nizzle
              </p>

              {displayRelatedCourses()}
            </div>
          </div>
          <div className='md:hidden'>
            <h3 className='font-medium mb-0'>Lesson List</h3>
            <LessonList
              lessons={lessons}
              currentLesson={currentLesson}
              setCurrentLesson={setCurrentLesson}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseViewer;
