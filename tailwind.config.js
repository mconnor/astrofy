/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

import typo from '@tailwindcss/typography';
export default {
  content: ['./src/**/*.{astro,html,js, md,ts}'],
  theme: {
    extend: {},
  },
  plugins: [typo, daisyui],
  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
