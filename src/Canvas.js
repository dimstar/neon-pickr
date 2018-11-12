import React from 'react';
import ReactDOM from 'react-dom';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.contextPixel.bind(this);
    }

    componentDidMount() {
        this.doCanvasThings();
        this.setState({
            rect: ReactDOM.findDOMNode(this).getBoundingClientRect(),
        })
        console.log(ReactDOM.findDOMNode(this).getBoundingClientRect());
    }

    mousePos(e){
        this.contextPixel( this.state.ctx, e.clientX - this.state.rect.x, e.clientY);
    }

    rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255) throw "Invalid color component"; // eslint-disable-line
        return ((r << 16) | (g << 8) | b).toString(16);
    }
    

     doCanvasThings = () => {
        let image_proper = new Image();
        let image_uri = 'images/neon-colors-gradient_16029-8.jpg';
        image_proper.src = image_uri;
        const ctx_local = this.refs.canvas.getContext("2d");
    
        console.log('image? ', image_proper);

        ctx_local.fillRect(0,0, 100, 100);
        // images can only be drawn once the browser has got them...
        image_proper.onload = () => {
            ctx_local.drawImage( image_proper, 0, 0);
            this.setState({
                ctx: ctx_local
            });
            this.contextPixel(ctx_local, 1, 1);
        }
        // return ctx;
    }

    contextPixel(ctx, x, y){
        let pixel = ctx.getImageData( x, y, 1, 1).data;
        console.log('x and y?', x, y);
        let hex = "#" + ("000000" + this.rgbToHex(pixel[0], pixel[1], pixel[2])).slice(-6);
        console.log('image data?', hex);
        document.getElementById("root").style.background = hex;
    }

    render() {
        
        return (<canvas onClick={this.mousePos.bind(this)} ref="canvas" width={500} height={500} />);
    }
}

export default Canvas;