 const Canvas = ({width , height})=>{
    return(
        <canvas width={width} height={height} style={canvasStyle} className="canvas" />
    )
}
export default Canvas;
const canvasStyle = {
    backgroundColor: 'black',
}
