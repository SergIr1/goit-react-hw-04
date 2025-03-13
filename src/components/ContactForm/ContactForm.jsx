import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Number is required'),
});

export default function ContactForm({ onAdd }) {
  const handeleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    actions.resetForm();
  };

  const filedId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handeleSubmit}
    >
      <Form className={css.form}>
        <label className={css.textLabel} htmlFor={`${filedId}-name`}>
          Name
        </label>
        <Field
          className={css.input}
          placeholder="Your name"
          type="text"
          name="name"
          id={`${filedId}-name`}
        />
        <ErrorMessage className={css.error} name="name" component={'span'} />
        <label className={css.textLabel} htmlFor={`${filedId}-number`}>
          Number
        </label>
        <Field
          className={css.input}
          placeholder="Your number"
          type="tel"
          name="number"
          id={`${filedId}-number`}
        />
        <ErrorMessage className={css.error} name="number" component={'span'} />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
// ======================= hands work =======================
//   export default function ContactForm({ onAdd }) {
//   const filedId = useId();
//   // const nameId = useId();
//   // const numberId = useId();
//   const handeleSubmit = event => {
//     event.preventDefault();
//     onAdd({
//       id: nanoid(),
//       name: event.target.elements.name.value,
//       number: event.target.elements.number.value,
//     });
//     event.target.reset();
//   };
//   return (
//     <form className={css.form} onSubmit={handeleSubmit}>
//       <label className={css.textLabel} htmlFor={`${filedId}-name`}>
//         Name
//       </label>
//       <input
//         className={css.input}
//         placeholder="Your name"
//         type="text"
//         name="name"
//         id={`${filedId}-name`}
//       />
//       <label className={css.textLabel} htmlFor={`${filedId}-number`}>
//         Number
//       </label>
//       <input
//         className={css.input}
//         placeholder="Your number"
//         type="tel"
//         name="number"
//         id={`${filedId}-number`}
//       />
//       <button className={css.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }
// ======================= /hands work =======================
