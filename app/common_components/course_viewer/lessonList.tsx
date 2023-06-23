'use client'

import Link from 'next/link'
import { useState } from 'react'

export interface ILessonItem {
	lessonName: string
	lessonDescription: string
	lessonPath: string
	thumbnailPath: string
}

interface LessonListProps {
	lessons: ILessonItem[]
}

const LessonList = ({ lessons }: LessonListProps) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [currentLesson, setCurrentLesson] = useState<ILessonItem | null>(null)

	const handleLessonClick = (lesson: ILessonItem) => {
		setCurrentLesson(lesson)
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setCurrentLesson(null)
		setModalIsOpen(false)
	}

	return (
		<>
			<ol className='lesson-list'>
				{lessons.map((lesson, index) => {
					return (
						<li
							className='mb-6 bg-zinc-700 p-2 rounded-xl'
							key={index}
							onClick={() => handleLessonClick(lesson)}
						>
							<div className='lesson-item flex items-center'>
								<div className='lesson-thumbnail mr-2'>
									<img
										src={lesson.thumbnailPath}
										alt={lesson.lessonName}
									/>
								</div>
								<div className='lesson-info'>
									<h3 className='text-xs font-medium mb-1'>
										{lesson.lessonName}
									</h3>
									<p className='text-xs mb-0'>
										{lesson.lessonDescription}
									</p>
								</div>
							</div>
						</li>
					)
				})}
			</ol>

			{modalIsOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-70 z-10'></div>
			)}
			{currentLesson && (
				<dialog
					open={modalIsOpen}
					className='z-20 rounded-lg max-w-[50%]'
				>
					<button
						onClick={closeModal}
						className='text-gray-400 absolute right-2 top-2'
					>
						X
					</button>
					<h2 className='font-semibold'>
						{currentLesson.lessonName}
					</h2>
					<p className='pb-6'>{currentLesson.lessonDescription}</p>

					<Link
						href={currentLesson.lessonPath}
						className='rounded-3xl bg-red-400 py-2 px-1 text-sm absolute right-2 bottom-2'
					>
						Start Lesson
					</Link>
				</dialog>
			)}
		</>
	)
}

export default LessonList
