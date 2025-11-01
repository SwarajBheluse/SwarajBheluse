/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const fs = require('fs');

const noiseBitmap = fs.readFileSync('./src/assets/noise.png', { encoding: 'base64' });
const noiseDataUri = 'data:image/png;base64,' + noiseBitmap;

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': `linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('${noiseDataUri}')`
            },
            colors: {
                neutral: colors.neutral,
                // Eco-friendly color palette for Sairaj Globalex
                'eco-green': {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
                'earth-brown': {
                    50: '#fdf8f6',
                    100: '#f2e8e5',
                    200: '#eaddd7',
                    300: '#e0cec7',
                    400: '#d2bab0',
                    500: '#bfa094',
                    600: '#a18072',
                    700: '#977669',
                    800: '#846358',
                    900: '#43302b',
                },
                'natural-beige': {
                    50: '#fdfcfb',
                    100: '#faf8f5',
                    200: '#f5f1ea',
                    300: '#ebe4d7',
                    400: '#ddd2bd',
                    500: '#c9b89a',
                    600: '#b39f7e',
                    700: '#9a8565',
                    800: '#7d6d54',
                    900: '#665a45',
                },
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.6s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#16a34a',
                    'primary-content': '#ffffff',
                    secondary: '#9a8565',
                    info: '#22c55e',
                    'info-content': '#ffffff',
                    success: '#16a34a',
                    warning: '#c9b89a',
                    error: '#dc2626',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
