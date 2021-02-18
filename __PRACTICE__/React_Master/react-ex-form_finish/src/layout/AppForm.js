import React, { Component, createRef } from 'react'
import AppInput from '../components/ui/AppInput'

const styles = {
	fieldset: { border: 0 },
	file: {
		borderRadius: '3px',
		background: 'rgba(255,255,255, 1)',
		padding: '1rem',
		color: '#4c0cd4',
	},
}

class AppForm extends Component {
	constructor(props) {
		super(props)
		this.fileInput = createRef()
	}
	state = {
		signInInfo: {
			name: '',
			pass: '',
			comment: '',
			role: '',
			roles: [],
		},
	}

	multiInputHandler = (e) => {
		const { signInInfo } = this.state
		let { name, value } = e.target

		if (name === 'roles') {
			const options = Array.from(e.target.children)
			const selectedOptions = options.filter((option) => option.selected)
			value = selectedOptions.map((option) => option.value)
		}

		this.setState({
			signInInfo: {
				...signInInfo,
				[name]: value,
			},
		})
	}

	render() {
		return (
			<div className="app container">
				<form className="form-example">
					<fieldset style={styles.fieldset}>
						<legend className="h2">React 폼 컨트롤 실습</legend>
						<AppInput
							id="user-name"
							label="이름"
							inputProps={{ name: 'name' }}
							onInput={this.multiInputHandler}
						/>
						<AppInput
							type="password"
							id="user-pass"
							label="패스워드"
							inputProps={{ name: 'pass' }}
							onInput={this.multiInputHandler}
						/>
						<div
							className="form-control"
							style={{ justifyContent: 'flex-start' }}
						>
							<label
								htmlFor="user-role"
								className="label"
								style={{ paddingRight: '1.8rem' }}
							>
								역할
							</label>
							<select
								className="select"
								id="user-role"
								name="role"
								value={this.state.role}
								onChange={this.multiInputHandler}
							>
								<option value="">역할을 선택하세요.</option>
								<option value="lecturer">강사</option>
								<option value="student">학생</option>
							</select>
						</div>
						<div className="form-control" aria-labelledby="user-comment">
							<p className="a11y-hidden" id="user-comment">
								남기고 싶은 코멘트
							</p>
							<textarea
								className="textarea resize-vertical"
								onChange={this.multiInputHandler}
								name="comment"
								cols="80"
								rows="10"
							/>
						</div>
						<div className="form-control" style={styles.file}>
							<label htmlFor="user-upload" className="label">
								파일 업로드
							</label>
							<input
								type="file"
								id="user-upload"
								className="input"
								style={{ border: 0 }}
							/>
						</div>
						<div
							className="button-group"
							style={{ display: 'flex', justifyContent: 'flex-end' }}
						>
							<button type="submit" className="button">
								저장
							</button>
							<button type="reset" className="button">
								취소
							</button>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
}

export default AppForm
