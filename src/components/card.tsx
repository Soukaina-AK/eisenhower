import { ComponentProps, FC } from "react"


const Card:FC<ComponentProps<"div">> = ({...props}) => {
  return (
    <div {...props} className={`relative max-h-[300px] max-w-[400px] w-[30vw] h-[30vw] rounded-lg border-solid ${props.className}`}></div>
  )
}

export default Card