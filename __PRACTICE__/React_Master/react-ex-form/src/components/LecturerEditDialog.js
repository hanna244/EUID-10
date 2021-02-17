import React, { Component } from 'react'
import withLecturerContext from '../hoc/withLecturerContext'

class LecturerEditDialog extends Component {
	state = {
		name: '',
		facebook: '',
		image: '',
		module: '',
	}

	_previousLecturer = null

	_updateState = (lecturer) => {
		if (lecturer !== this._previousLecturer) {
			this.setState({ ...lecturer })
			this._previousLecturer = lecturer
		}
	}

	shouldComponentUpdate(nextProps) {
		// 수정 할 강사가 변경된 경우만 업데이트
		this._updateState(nextProps.context.editingLecturer)
		return true
	}

	render() {
		const { context, visibleClass } = this.props
		const { editingLecturer } = context

		return (
			<div
				role="dialog"
				className={`lecturer-edit-dialog ${visibleClass}`}
				aria-labelledby="dialog-headline"
			>
				<div className="container panel">
					<h2 id="dialog-headline">강사 정보 수정</h2>
					{!editingLecturer ? (
						<p>수정할 강사 정보가 없습니다.</p>
					) : (
						<form>
							<div className="form-control">
								<label className="label" htmlFor="name">
									이름
								</label>
								<input
									type="text"
									id="name"
									className="input"
									value={this.state.name}
									onChange={(e) => {
										this.setState({
											name: e.target.value,
										})
									}}
								/>
							</div>
							<div className="form-control">
								<label className="label" htmlFor="module">
									모듈
								</label>
								<input
									type="text"
									id="module"
									className="input"
									value={this.state.module}
									onChange={(e) => {
										this.setState({
											module: e.target.value,
										})
									}}
								/>
							</div>
							<div className="form-control">
								<label className="label" htmlFor="sns">
									<abbr title="Social Network Service">SNS</abbr>
								</label>
								<input
									type="text"
									id="sns"
									className="input"
									value={this.state.facebook}
									onChange={(e) => {
										this.setState({
											facebook: e.target.value,
										})
									}}
								/>
							</div>
							<div className="form-control">
								<label className="label" htmlFor="image">
									이미지
								</label>
								<input
									type="text"
									id="image"
									className="input"
									value={this.state.image}
									onChange={(e) => {
										this.setState({
											image: e.target.value,
										})
									}}
								/>
							</div>
							<div
								role="group"
								className="button-group"
								style={{
									display: 'flex',
									justifyContent: 'flex-end',
									marginRight: '-3px',
								}}
							>
								<button
									type="submit"
									className="button is-filled"
									onClick={(e) => {
										e.preventDefault()
										context.editLecturer(editingLecturer.id, { ...this.state })
										context.hideDialog()
									}}
								>
									저장
								</button>
								<button
									type="reset"
									className="button theme-dark"
									onClick={() => {
										context.hideDialog()
									}}
								>
									취소
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
		)
	}
}

export default withLecturerContext(LecturerEditDialog)
