import React from 'react';

export class FallingSand extends React.Component {
    window = React.useRef()
    render() {
        return (
            <p>
                <SandWindow ref={window} width="200" height="200" />
            </p>
        )
    }
}

class SandWindow extends React.Component {

    canvasRef = React.useRef()

    constructor(props) {
        super(props)
        const canvas = this.canvasRef.current
        const context = canvas.getContext("2d")

        context.fillStyle = "#000000"
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }

    render(props) {
        return <canvas ref={this.canvasRef} height={this.props.height} width={this.props.width}/>
    }
}

