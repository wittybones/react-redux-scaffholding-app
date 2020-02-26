import React from 'react'

// const Movie = (({ Title, Year, Type, Poster, Genre, Released, Runtime }) => {
//   return <div className="card" >
//     <img className="card-img-top" src={Poster} alt="Card image cap" />
//     <div className="card-body">
//       <div className="card-title title font-weight-bold">{Title}</div>
//       <div className="card-title font-weight-light">{Genre}</div>
//       <div className="card-title font-weight-light">{Year}</div>
//       <div className="card-title font-weight-light">{Type}</div>
//       <div className="card-title font-weight-light">{Released}</div>
//       <div className="card-title font-weight-light">{Runtime}</div>
//     </div>
//   </div>
// })



const Movie = ({ movie }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img className="card-img-top"
          src={movie.Poster}
        />
        <div className="card-body">
          <div className="card-title title font-weight-bold">{movie.Title}</div>
          <div className="card-title font-weight-light">{movie.Genre}</div>
          <div className="card-title font-weight-light">{movie.Year}</div>
          <div className="card-title font-weight-light">{movie.Type}</div>
          <div className="card-title font-weight-light">{movie.Released}</div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small className="text-muted">{movie.Runtime}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;
