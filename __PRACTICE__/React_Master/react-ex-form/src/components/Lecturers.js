import React, { Component } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import Lecturer from './Lecturer'

class Lecturers extends Component {
	static propTypes = {
		instructor: arrayOf(
			shape({
				id: string.isRequired,
				name: string.isRequired,
				module: string.isRequired,
				facebook: string.isRequired,
				image: string.isRequired,
			})
		),
	}
	static defaultProps = {
		instructor: [],
	}

	render() {
		return (
			<ul className="lecturers">
				{this.props.instructor.map((lecturer) => (
					<Lecturer key={lecturer.id} lecturer={lecturer} />
				))}
			</ul>
		)
	}
}

export default Lecturers
