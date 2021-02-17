import React, { Component } from 'react'
import withLecturerContext from '../hoc/withLecturerContext'

class Lecturer extends Component {
	render() {
		const { lecturer, context } = this.props

		return (
			<li className="lecturer">
				<a href={lecturer.facebook} target="_blank" rel="noreferrer noopener">
					<figure className="lecturer-info">
						<img
							src={lecturer.image}
							alt=""
							width="50"
							height="50"
							className="lecturer-photo"
						/>
						<figcaption>
							{lecturer.module} 모듈을 담당 할 {lecturer.name} 강사 Facebook 바로가기
						</figcaption>
					</figure>
				</a>
				<div role="group" className="button-group">
					<button
						type="button"
						className="button"
						onClick={() => context.showDialog(lecturer.id)}
					>
						수정
					</button>
					<button
						type="button"
						className="button"
						onClick={() => context.removeLecturer(lecturer.id)}
					>
						제거
					</button>
				</div>
			</li>
		)
	}
}

export default withLecturerContext(Lecturer)
