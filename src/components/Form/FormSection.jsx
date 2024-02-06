/* eslint-disable react/prop-types */

export default function FormSection({ title, text, children, ...props }) {
  return (
    <section {...props}>
      {title && <h2 className='form__title'>{title}</h2>}
      {text && <p className='form__text'>{text}</p>}
      {children}
    </section>
  );
}
