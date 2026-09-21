import plusIcon from "./icons/icon-plus.svg"
import minusIcon from "./icons/minus-plus.svg"

export default function LikesBtn({children}){
  return (
    <div>
      <button>{plusIcon}</button>
      <span>{children}</span>
      <button>{minusIcon}</button>
    </div>
  )
}