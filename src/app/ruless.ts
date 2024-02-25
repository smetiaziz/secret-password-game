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
      description: 'Your password must include my name.',
      validate: (password: string) => password.includes('smetiaziz')
    },
    {
      description: 'Your password must include the fastest land animal.',
      validate: (password: string) => password.includes('cheetah')
    },
    {
      description: 'Your password must include a Roman numeral.',
      validate: (password: string) => /[IVXLCDM]+/i.test(password)
    },
    {
      description: 'Your password must include the biggest country.',
      validate: (password: string) => password.includes('Russia')
    },
    {
      description: 'Your password must include the  longest word in english.',
      validate: (password: string) => password.includes('pneumonoultramicroscopicsilicovolcanoconiosis')
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
    },
    {
      description: 'Your password must include one of the best Premier League teams.',
      validate: (password: string) => {
      const teams = [
      'Manu united', 'Man city', 'Arsenal', 'Chelsea', 'Tottenham', 'Liverpool'
      ];
      return teams.some(team => password.includes(team));
    }
    },
    {
      description: 'The Roman numerals in your password should multiply to 35.',
      validate: (password: string) => {
        // Function to convert Roman numeral to numeric value
        const romanToDecimal = (numeral: string): number => {
          const numerals: { [key: string]: number } = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
          };
          let result = 0;
          let prevValue = 0;
          for (let i = numeral.length - 1; i >= 0; i--) {
            const currentValue = numerals[numeral[i]];
            if (currentValue < prevValue) {
              result -= currentValue;
            } else {
              result += currentValue;
            }
            prevValue = currentValue;
          }
          return result;
        };
    
        // Find Roman numerals in password and calculate their product
        const numerals = password.match(/[IVXLCDM]+/gi);
        if (numerals) {
          const product = numerals.reduce((acc, numeral) => acc * romanToDecimal(numeral), 1);
          return product === 35;
        }
        return false; // Return false if no Roman numerals found
      }
    }
    
    // Add more rules as needed...
  ];