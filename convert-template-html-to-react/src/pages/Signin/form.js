import React from 'react';
import PButton from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import { Form } from 'react-bootstrap';

export default function PForm({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={'Masukan email'}
        label={'Email'}
        name='email'
        value={form?.email}
        type='text'
        onChange={(e) => handleChange(e)}
      />
      <TextInputWithLabel
        placeholder={'Masukan password'}
        label={'Password'}
        name='password'
        value={form?.password}
        type='password'
        onChange={(e) => handleChange(e)}
      />
      <PButton
        loading={isLoading}
        disabled={isLoading}
        variant='primary'
        action={handleSubmit}
      >
        Submit
      </PButton>
    </Form>
  );
}
