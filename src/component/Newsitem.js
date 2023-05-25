import React, { Component } from 'react'
// export class Newsitem extends Component {
//   render() {
  const Newsitem=(props)=>{
    let {title,description,imageurl,newsurl,author,date,source}=props;
    return (
      <div className='my-5'>
        <div className="card">
  <img src={!imageurl?"https://cdn.vox-cdn.com/thumbor/vgSaK_qIH3ZIODqBdGjyPe1UnfM=/0x0:2000x1333/1200x628/filters:focal(1000x667:1001x668)/cdn.vox-cdn.com/uploads/chorus_asset/file/24633571/DSC04602_processed.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
   
    <h5 className="card-title">{title}...</h5>
    <div style={{display:'flex',justifyContent:"flex-end",position:'absolute',right:0,top:0}}>
    <span className=" badge rounded-pill bg-primary" >
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
  </div>
    <p className="card-text">{description}...</p>
    <p className='card-text'><small className='text-muted'>By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
// } }

export default Newsitem
