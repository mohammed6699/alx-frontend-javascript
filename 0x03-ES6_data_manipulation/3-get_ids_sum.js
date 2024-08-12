export default function getStudentIdsSum(students) {
	return students.reduce((age, students) => age + students.id, 0);
}
