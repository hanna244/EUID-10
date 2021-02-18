import React, { Component } from 'react'
import Lecturers from '../components/Lecturers'
import withLecturerContext from '../hoc/withLecturerContext'

class AppMain extends Component {
	render() {
		return (
			<main className="app-main">
				<h1 className="a11y-hidden">앱 메인 콘텐츠</h1>
				<Lecturers instructor={this.props.context.lecturers} />
			</main>
		)
	}
}

export default withLecturerContext(AppMain)
