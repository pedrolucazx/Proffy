/* eslint-disable @next/next/no-img-element */
export default function Button(props) {
  return (
    <div>
      <button 
        className={props.className} 
        type={props.type}
      >
        <img src={props.img} alt={props.alt} />
        <h3>{props.text}</h3>
      </button>
    </div>
  )
}
