import { useContext } from 'react';
import MyContext from '../context/MyContext';

const Content = () => {
  const { extra, data } = useContext(MyContext);
  const { results, loading, error } = data;

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;

  const list = results.map((user) =>
    extra ? (
      <p key={user.id} className='extra'>
        {user.name}
      </p>
    ) : (
      <p key={user.id}>{user.name}</p>
    )
  );

  return <section>{list}</section>;
};

export default Content;
