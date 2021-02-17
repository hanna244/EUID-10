import React from 'react'

export const lectureContext = {
	lecuturers: [],
	editingLecturer: null,
	removeLecture: (removeId) => {},
	editLecture: (editId) => {},
	showDialog: (lecturerId) => {},
	hideDialog: () => {},
}

export default React.createContext(lectureContext)
