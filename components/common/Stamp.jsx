import ReactCurvedText from "react-curved-text";

export default function Stamp({text}) {
  return (
    <ReactCurvedText width='120'
      height='120'
      cx='60'
      cy='60'
      rx='40'
      ry='40'
      startOffset='0'
      reversed={true}
      text={text}
      textProps={{"style": {"fontSize": "20"}}}
      textPathProps={{"fill": "#0f172a"}}
      tspanProps={{"dy": "0"}}
      ellipseProps={null}
      svgProps={{"style": {"transform": "rotate(0deg)"}}} 
    />
  )
}
