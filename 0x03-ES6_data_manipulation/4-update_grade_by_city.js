export default function updateStudentGradeByCity(students, city, newGrades) {
	const studentLocation = students.filter((students) => students.location === city);
	const gradeInfo = studentLocation.map(
		(students) => {
			for (const gradeValue of newGrades) {
				if (students.id === gradeValue.studentId) {
					students.grade = gradeValue.grade;
				}
			}
			if (students.newGrade === undefined) {
				students.grade = 'N/A';
			}
			return students;
		},
	);
	return gradeInfo;
}
