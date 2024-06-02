/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export const GifItem = ({title, url}) => {
  
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
