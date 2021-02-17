import React, { Component } from 'react'
import LectureContext from './context/LectureContext'
import AppHeader from './layout/AppHeader'
import AppMain from './layout/AppMain'
import LecturerEditDialog from './components/LecturerEditDialog'

class App extends Component {
	state = {
		FEML_lecturers: [
			{
				id: 'lecturer-az01871',
				name: '김데레사',
				module: 'A',
				facebook: 'https://facebook.com/seulbinim',
				image: 'https://yamoo9.github.io/images/photo-deresa@2x.png',
			},
			{
				id: 'lecturer-az01872',
				name: '야무',
				module: 'B,C',
				facebook: 'https://facebook.com/yamoo9',
				image: 'https://yamoo9.github.io/images/photo-yamoo9@2x.png',
			},
		],
		isVisibleDialog: false,
		editingLecturer: null,
	}

	removeLecturer = (removeId) => {
		this.setState({
			FEML_lecturers: this.state.FEML_lecturers.filter(
				(lecturer) => lecturer.id !== removeId
			),
		})
	}

	editLecturer = (editId, changedLecturer) => {
		const changedLectures = this.state.FEML_lecturers.map(
			(lecturer) => (lecturer.id === editId ? changedLecturer : lecturer)
		)
		this.setState({
			FEML_lecturers: changedLectures,
		})
	}

	showDialog = (lecturerId) => {
		this.setState({
			isVisibleDialog: true,
			editingLecturer: this.state.FEML_lecturers.find(
				(lecturer) => lecturer.id === lecturerId
			),
		})
	}

	hideDialog = () => {
		this.setState({
			isVisibleDialog: false,
			editingLecturer: null,
		})
	}

	render() {
		const { FEML_lecturers, editingLecturer, isVisibleDialog } = this.state
		return (
			<LectureContext.Provider
				value={{
					lecturers: FEML_lecturers,
					editingLecturer,
					removeLecturer: this.removeLecturer,
					editLecturer: this.editLecturer,
					showDialog: this.showDialog,
					hideDialog: this.hideDialog,
				}}
			>
				<div className="app container">
					<AppHeader title="강사진" />
					<AppMain />
					<LecturerEditDialog
						visibleClass={isVisibleDialog ? 'is-active' : ''}
					/>
				</div>
			</LectureContext.Provider>
		)
	}
}

export default App
