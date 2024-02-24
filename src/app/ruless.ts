import { Rule } from "./Rule";

export const ruless: Rule[] = [
    {
      description: 'Your password must be at least 5 characters.',
      validate: (password: string) => password?.length >= 5
    },
    {
      description: 'Your password must include a number.',
      validate: (password: string) => /\d/.test(password)
    },
    {
      description: 'Your password must include an uppercase letter.',
      validate: (password: string) => /[A-Z]/.test(password)
    },
    {
      description: 'Your password must include "aziz".',
      validate: (password: string) => password.includes('aziz')
    },
    {
      description: 'Your password must include "smeti".',
      validate: (password: string) => password.includes('smeti')
    },
    {
    description: 'The digits in your password must add up to 25.',
  validate: (password: string) => {
    const digits = password.match(/\d/g);
    if (!digits) return false; // If there are no digits in the password, the rule fails
    const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum === 25;
      }
    },
    {
      description: 'Your password must include a month of the year.',
      validate: (password: string) => {
      const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
      ];
      return months.some(month => password.includes(month));
    }
    }
    // Add more rules as needed...
  ];