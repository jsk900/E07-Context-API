import { useContext } from 'react';
import MyContext from '../context/MyContext';

const Footer = () => {
  const context = useContext(MyContext);
  console.log(context);
  const { footerText } = useContext(MyContext);

  return (
    <footer>
      <p>{footerText}</p>
    </footer>
  );
};

export default Footer;
