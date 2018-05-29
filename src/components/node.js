import React from "react"
import _ from "lodash";
import PropTypes from 'prop-types'
import trashImg from '../images/trash.svg'

const DEFAULTS = {
		title: "Untitled",
		icon: "",
		id: "id",
		width: 170,
		height:100,
		bgColor: "#fff",
		strokeColor: "#9bc8ff"
	};

const Node = ({ 
	x, y, id, 
	width = DEFAULTS.width, 
	height = DEFAULTS.width, 
	title = DEFAULTS.title, 
	icon = DEFAULTS.title, 
	bgColor = DEFAULTS.bgColor, 
	strokeColor = DEFAULTS.strokeColor, 
	onClick, onDelete}) => {

	return (<g className="node-group" data-id={id} data-x={x} data-y={y} transform={`translate(${x}, ${y})`}>			
		<rect
			onClick={onClick}
			width={width}
			height={height}
			fill="#fff"
			stroke={strokeColor}
			filter="url(#dropShadowv-21195304394)"
			rx="15" ry="15">
		</rect>
		<rect
			width={width}
			height={37}
			fill={bgColor}
			stroke={strokeColor}
			rx="15" ry="15">
		</rect>
		<image href={icon} width="30" transform="translate(8,8)"/>
		<text transform="translate(45,23)">
			<tspan> {title} </tspan>
		</text>
		<text className="node-id" x="0.8em" y={height-4}>
			<tspan>{id}</tspan>
		</text>
		<g className="port-group" transform={`translate(${width}, 0)`}>
			<g>
				<circle cy={ 10 } r="10"></circle>
			</g>
			<circle cy={ 32 } r="10"></circle>
			<circle cy={ 54 } r="10"></circle>
			<circle cy={ 76 } r="10"></circle>
		</g>
		<g className="del-group" onClick={onDelete}>
			<circle cx={width-20} r="10"></circle>
			<image href={trashImg} width="10" height="13" transform={`translate(${width-25},-6.5)`} />
		</g>
	</g>)
}

Node.propTypes = {
	x: PropTypes.number.isRequired,
	x: PropTypes.number.isRequired,
	id: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired
}
export default Node