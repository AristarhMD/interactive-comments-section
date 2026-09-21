import LikesBtn from "./LikesBtn.jsx"

export default function Post(props){
  return (
    <article>
      <div>
        <img src={props.avatar} alt={`Avatar of the user ${props.user}`} />
        <p>{props.user}</p>
        <p>{props.posted}</p>
      </div>

      <p>{props.text}</p>
      
      <div>
        <LikesBtn>{props.likes}</LikesBtn>
      </div>
    </article>
  )
}