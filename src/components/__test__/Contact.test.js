import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact Component', () => {
  test('should render the Contact component', () => {
    render(<Contact />);
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });

  test('should render form fields', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/enter name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument();
  });

  test('should allow user to input values and submit form', () => {
    render(<Contact />);


    fireEvent.change(screen.getByPlaceholderText(/enter name/i), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByPlaceholderText(/enter email/i), {
      target: { value: 'john.doe@example.com' }
    });
    fireEvent.change(screen.getByRole('textbox', { name: /message/i }), {
      target: { value: 'This is a test message.' }
    });

   
    expect(screen.getByPlaceholderText(/enter name/i).value).toBe('John Doe');
    expect(screen.getByPlaceholderText(/enter email/i).value).toBe('john.doe@example.com');
    expect(screen.getByRole('textbox', { name: /message/i }).value).toBe('This is a test message.');
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/thank you for contacting us!/i)).toBeInTheDocument();
    expect(screen.getByText(/we have received your message and will get back to you soon./i)).toBeInTheDocument();
  });
});
