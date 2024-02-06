/* eslint-disable react/prop-types */
import './Form.scss';

export default function Form({ children }) {
  return (
    <form className='form' action='#'>
      {children}
    </form>
  );
}
