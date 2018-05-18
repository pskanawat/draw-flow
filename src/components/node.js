import React from "react"
import PropTypes from 'prop-types'
import trashImg from '../images/trash.svg'

const Node = ({ x, y, id, width, height, onClick, onDelete}) => (
	<g className="node-group" data-id={id} data-x={x} data-y={y} transform={`translate(${x}, ${y})`}>			
		<rect
			className="body"
			onClick={onClick}
			width={width}
			height={height}
			stroke="#9bc8ff"
			filter="url(#dropShadowv-21195304394)">
		</rect>
		<rect 
			className="node-head"
			width={width}
			height={28}
			stroke="#9bc8ff">
		</rect>
		<text className="node-title" x="0.8em" y="1.4em">
			<tspan> Node title </tspan>
		</text>
		<text className="node-id" x="0.8em" y={height-4}>
			<tspan>{id}</tspan>
		</text>
		<g className="port-group">
			<path className="port-body" strokeWidth="2" d="M100 0 Q 150 60 100 100"></path>
		</g>
		<g className="del-group" onClick={onDelete}>
			<circle cx={width-20} r="10"></circle>
			<image href={trashImg} width="10" height="13" transform={`translate(${width-25},-6.5)`} />
		</g>
	</g>
)

Node.propTypes = {
	x: PropTypes.number.isRequired,
	x: PropTypes.number.isRequired,
	id: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired
}
export default Node