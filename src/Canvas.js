import React from 'react';

class Canvas extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.doCanvasThings();
    }

    canvasFun = () => {
        const xCoord = 0;
        const yCoord = 0;
        const canvasWidth = 1024;
    
        const getColorIndicesForCoord = (x, y, width) => {
          const red = y * (width * 4) + x * 4;
          return [red, red + 1, red + 2, red + 3];
        };
    
        const colorIndices = getColorIndicesForCoord(xCoord, yCoord, canvasWidth);
    
        // const [redIndex, greenIndex, blueIndex, alphaIndex] = colorIndices;
        return colorIndices;
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
        console.log('image? ', this.canvasFun());
        ctx_local.fillRect(0,0, 100, 100);
        // images can only be drawn once the browser has got them...
        image_proper.onload = () => {
            ctx_local.drawImage( image_proper, 0, 0)
            let pixel = ctx_local.getImageData( 1, 1, 1, 1).data;
            let hex = "#" + ("000000" + this.rgbToHex(pixel[0], pixel[1], pixel[2])).slice(-6);
            console.log('image data?', hex);
            document.getElementById("root").style.background = hex;
        }
        // return ctx;
    }

    render() {
        
        return (<canvas ref="canvas" width={500} height={500} />);
    }
}

export default Canvas;