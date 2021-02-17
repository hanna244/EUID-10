import React, { Component } from 'react'
import { string, func } from 'prop-types'

export default class AppInput extends Component {
	static propTypes = {
		label: string.isRequired,
		id: string.isRequired,
		onInput: func,
	}

	static defaultProps = {
		type: 'text',
	}

	handler = (e) => {
		const { onInput } = this.props
		onInput && onInput(e)
	}

	render() {
		return (
			<div className="form-control">
				<label
					className="label"
					style={{ flexBasis: '3.5rem' }}
					htmlFor={this.props.id}
					{...this.props.labelProps}
				>
					{this.props.label}
				</label>
				<input
					className="input"
					id={this.props.id}
					type={this.props.type}
					{...this.props.inputProps}
					onChange={(e) => this.handler(e)}
				/>
			</div>
		)
	}
}
