import React, { Component } from 'react'
import LectureContext from '../context/LectureContext'

export default (Comp) => {
	return class WithLecturerContext extends Component {
		static contextType = LectureContext
		render() {
			return <Comp {...this.props} context={this.context} />
		}
	}
}
