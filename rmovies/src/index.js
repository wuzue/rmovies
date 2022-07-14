import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";

import './index.css'

const movies = [

  {
    id:1,
    img:"https://i0.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/hAaDGdgRvocBXT4g4UUM2kneNnE.jpg?resize=250%2C350&ssl=1",
    title:"Rubikon",
    genre:"Drama"
  },
  {
    id:2,
    img:"https://i2.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/w8dSAuMHUgx0lYSB6wAAURStcGM.jpg?resize=250%2C350&ssl=1",
    title:"Torn Hearts",
    genre:"Terror"
  },
  {
    id:3,
    img:"https://i2.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/j6cA486hZEEyqmy12D0YmOlJyqp.jpg?resize=250%2C350&ssl=1",
    title:"Doula",
    genre:"Comédia"
  },
  {
    id:4,
    img:"https://i0.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/elrXo5uMCI8cI8idpblQPT3QwDS.jpg?resize=250%2C350&ssl=1",
    title:"Um Reecontro Inesperado",
    genre:"Comédia"
  },
  {
    id:5,
    img:"https://i1.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/w1ObkkhopXCjunpoI51nChdVGyl.jpg?resize=250%2C350&ssl=1",
    title:"O Homem Ideal",
    genre:"Ficção"
  },
  {
    id:6,
    img:"https://i2.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/2xPkj09lesebCM7EtvNlysdLb30.jpg?resize=250%2C350&ssl=1",
    title:"Mommy's Little Star",
    genre:"Suspense"
  },
  {
    id:7,
    img:"https://i0.wp.com/m.media-amazon.com/images/M/MV5BZWFlOGY3NTgtOTdmOS00ODBmLWFiOWYtMjM1NGIzZjk2M2VmXkEyXkFqcGdeQXVyMjM2OTAxNg@@._V1_.jpg?resize=250%2C370&ssl=1",
    title:"Love Crime",
    genre:"Crime"
  },
  {
    id:8,
    img:"https://i0.wp.com/m.media-amazon.com/images/M/MV5BNjc0NTE2YjktNTI5Yy00ODRiLWEzNDUtYmE0ZWQ0YzQ1OTI5XkEyXkFqcGdeQXVyODc5NzA2Nw@@._V1_.jpg?resize=250%2C370&ssl=1",
    title:"Eye For Eye",
    genre:"Faroeste"
  },
  {
    id:6,
    img:"https://i2.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/zQmwQqtT2KEfg5IO5u8lexZoCAR.jpg?resize=250%2C350&ssl=1",
    title:"American Carnage",
    genre:"Terror"
  },
  {
    id:6,
    img:"https://i0.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/ac9cLKaSWBRtdOEFzOZkm2YnhUh.jpg?resize=250%2C350&ssl=1",
    title:"BastardoZ",
    genre:"Ação"
  },
];

function MovieList(){
  return (

    <React.Fragment>

      <div className='navbar'>
        
        <BrowserRouter>
          <Routes>
            
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
                </Route>
            
          </Routes>
        </BrowserRouter>
      </div>

    <section className='movielist'>
      {movies.map((movie, index)=>{
        return (

          <React.Fragment>

          <Movie key={movie.id} movie={movie}></Movie>
          </React.Fragment>
        );
      })}
    </section>
    </React.Fragment>
    );
};

const Movie = (data) =>{
  let {img, title, genre} = data.movie;
  return (
    <article className='movie'>
      <img src={img} alt=''/>
      <h1>{title}</h1>
      <h4>{genre}</h4>
    </article>
  );
};

ReactDom.render(<MovieList/>, document.getElementById('root'));