import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string,
    title: string,
    price: number,
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://633be2b4f11701a65f6a090f.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Error to get pizzas');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Loading</>;
  }

  return (
    <div>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <b>{pizza.price} ₽</b>
      <Link to='/'>
      <button className='button button--outline button-add'>
        <span>Назад</span>
      </button>
      </Link>
    </div>
  )
};

export default FullPizza;