import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { getAllrecipes, getAllDiet } from '../../redux/actions/index';
import Filtros from './filters/Filtros';
import Card from './Card';
import Paginado from './Paginado';
import './styles/home.css';
import Navbar from './navbar/Navbar';
import Loading from './Loading/Loading';
import Error404 from '../Error/Error404';

const Home = () => {
    const recipe = useSelector((state) => state.recipes);
    const page = useSelector((state) => state.page);
    const error = useSelector((state) => state.error);
    const allDiet = useSelector((state) => state.diets);

    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllrecipes());
    dispatch(getAllDiet());
  }, [dispatch]);

  const [order, setOrder] = useState(''); //para guardar los ordenamientos
  const [socre, setScore] = useState('');

//Paginado nuevo

let currenRecipes = [];
  const tamañoRecipe = recipe.length;
  const tamañoPorpagina = 9;
  let indexFinal = tamañoPorpagina * page; // 9 pagina
  let inicial = indexFinal - tamañoPorpagina; // 9-9=0
  currenRecipes = recipe.slice(inicial, indexFinal);

  return (
    <div>
      {/* -------------------Navbar------------------- */}
      <Navbar />

      {/* ------------Filtros----------*/}

      <div className="filter_paginate">
        <div className="filtros">
          {<Filtros diet={allDiet} setorder={setOrder} setscore={setScore} />}
        </div>
        <div className="paginate">
          {/* --------------Paginado-------------- */}
          <Paginado
            tamañoRecipe={tamañoRecipe}
            tamañoPorpagina={tamañoPorpagina}
            pageactual={page}
          />
        </div>
      </div>
      {error ? (
        <Error404 />
      ) : currenRecipes.length === 0 ? (
        <Loading />
      ) : (
        <div className="gallery_image_box">
          {currenRecipes?.map((recipe) => 
            <Card data={recipe} key={recipe.id} />
             
          )}
        </div>
      )}
    </div>
  );
};

export default Home;


