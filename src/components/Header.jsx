import { useContext } from 'react';
import MyContext from '../context/MyContext';

const Header = () => {
  const { headerText, extra, setExtra } = useContext(MyContext);

  return (
    <header>
      <h1>{headerText}</h1>
      <button onClick={() => setExtra(!extra)}>Extra</button>
    </header>
  );
};

export default Header;
