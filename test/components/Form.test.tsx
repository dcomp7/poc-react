import React from 'react';
import { it, expect, describe, beforeAll } from 'vitest';
import { act, render, screen, fireEvent } from '@testing-library/react';
import Form from '../../src/components/Form';
import '@testing-library/jest-dom/vitest';

describe('Form Component', () => {
  beforeAll(() => {
    render(<Form />);
  });

  it('should have a valid cpf message', () => {
    const input = screen.getByRole('textbox');

    act(() => {
      fireEvent.change(input, { target: { value: '52998224725' } });
    });

    act(() => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(screen.getByText('CPF válido')).toBeInTheDocument();
  });

  it('should have a invalid cpf message', () => {
    const input = screen.getByRole('textbox');

    act(() => {
      fireEvent.change(input, { target: { value: '52998224726' } });
    });

    act(() => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(screen.getByText('CPF inválido')).toBeInTheDocument();
  });

});
