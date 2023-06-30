'use client'

import { useState } from 'react'
import DialogBox from '../dialogBox'

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
				<div
					className='fixed inset-0 bg-black bg-opacity-70 z-10'
					onClick={closeModal}
				>
					{currentLesson && (
						<DialogBox
							title={currentLesson.lessonName}
							description={currentLesson.lessonDescription}
							link={currentLesson.lessonPath}
							closeModal={closeModal}
						/>
					)}
				</div>
			)}
		</>
	)
}

export default LessonList
