import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-nunito-sans)'],
        display: ['var(--font-nunito)']
      } 
    },
  },
  plugins: [],
}
export default config

git config --global user.email "abyantahta2002@gmail.com"
  git config --global user.name "Your Name"