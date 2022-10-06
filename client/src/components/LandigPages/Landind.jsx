import React from 'react';
import chef from './img/chef1.png';
import { Link } from 'react-router-dom';
/* import './css/order.css'; */
import './landin.css';
import chefs from '../../assets/img/chef1.png';
// import glasses from '../../assets/img/glasses.png';
// import vector1 from '../../assets/img/Vector1.png';
// import vector2 from '../../assets/img/Vector2.png';

export default function Landing() {
  return (
    <div className="intro">
      <div className="i__left">
        <div className="i__name">
          <h1>RECETAS SPOONACULAR</h1>
          <span>Alejandra Blanco</span>
          <span>
            tengo el gusto de presentarles mi proyecto food hecho con el corazon
          </span>

          <Link to="/home">
            <button className="button i__button">Entrar</button>
          </Link>
        </div>
      </div>
      <div className="i__right">
        
        <div className="blur" style={{ background: 'rgb(250 210 255)' }}></div>
        <div
          className="blur"
          style={{
            background: '#C1F5FF',
            top: '15rem',
            width: '15rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  );
}
