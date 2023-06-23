import { NextPage } from 'next'
import CourseViewer, {
	ICourseViewer,
} from './common_components/course_viewer/courseViewer'

const Home: NextPage = () => {
	const course: ICourseViewer = {
		courseName: 'Course Name',
		courseDescription: 'Course Description',
		courseThumbnail: 'thumbnail.jpg',
		prerequisites: ['Prerequisite 1', 'Prerequisite 2'],
		lessons: [
			{
				lessonName: 'Lesson 1',
				lessonDescription:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus culpa quibusdam quas laudantium cum natus eum incidunt quidem, esse repellendus, labore minima deserunt explicabo eaque vero enim? Sapiente vero accusamus cum laudantium, ipsa quibusdam atque voluptatem ullam ducimus incidunt.',
				lessonPath: '/lesson1',
				thumbnailPath: 'thumbnail1.jpg',
			},
			{
				lessonName: 'Lesson 2',
				lessonDescription: 'This is lesson 2',
				lessonPath: '/lesson2',
				thumbnailPath: 'thumbnail2.jpg',
			},
			// add more lessons as needed
		],
	}

	return (
		<div>
			<CourseViewer {...course} />
		</div>
	)
}

export default Home
