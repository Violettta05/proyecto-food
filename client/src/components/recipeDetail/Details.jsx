import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { recipesDetils } from '../../redux/actions/index';
import defaul from '../../assets/img/juse.jpg';
import './detalle.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(recipesDetils(id));
  }, [dispatch]);
  const data = useSelector((state) => state.details);
  const data1 = [].concat(data)
console.log('id', id )
console.log('data', data)
  return (
    <div>
      
      {data1.map((el) => (
        <div className="detalle" key={el.id}>
          <div className="detalle__left">
            <div className="detalle_name">
              <Link to="/home">
                <div className="d__back">
                  <p>
                    <FaArrowLeft />
                  </p>
                </div>
              </Link>
              <h1>{el.name}</h1>
              <img
                className="d_imagen"
                src={el.image}
                alt=" Not Fount"
                onError={(e) => {
                  e.target.src = defaul;
                }}
              />
              <span>
                <p>Score</p>
              </span>
              <div className="d__range">
                {<input type="range" defaultValue={el.healthScore} />}
                <span>{el.healthScore}</span>
              </div>
              <h2>Diets</h2>

              <div className="d__diets">
                
                    <p>{el.dieta}</p>
                 
              </div>
            </div>
          </div>
          {/* contenedor derecho */}
          <div className="detalle__right">
            <div className="d__desc">
              <h1>summary</h1>
              <p dangerouslySetInnerHTML={{ __html: el?.summary }}></p>
            </div>
            {!el.stepbyStep ? '' : <h1>StepbyStep </h1>}
            <div className="d__pasos">
              <p dangerouslySetInnerHTML={{ __html: el?.stepbyStep }}></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
