export default function getListStudentIds(arr) {
	if (!Array.isArray(arr)){
		return [];
	}else{
		let newArr = arr.map((item) => item.id);
		return newArr;
	}
}
