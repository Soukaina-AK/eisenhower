import { ComponentProps, FC } from "react"


const Card:FC<ComponentProps<"div">> = ({...props}) => {
  return (
    <div {...props} className={`relative flex-[1] rounded-lg border-solid min-h-[300px] ${props.className}`}></div>
  )
}

export default Card