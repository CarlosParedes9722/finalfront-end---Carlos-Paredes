import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import ContactForm from '../src/components/ContactForm';

describe('ContactForm', () => {
  test('should allow the user to type into the fields', () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello there!' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('Hello there!');
  });
  
});
