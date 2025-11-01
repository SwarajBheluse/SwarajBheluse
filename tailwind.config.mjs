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
                'grid-pattern': `linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('${noiseDataUri}')`,
                'hero-gradient': 'linear-gradient(135deg, #2D5016 0%, #6B8E23 100%)',
                'eco-gradient': 'linear-gradient(to right, #2D5016, #4A7C23, #6B8E23)'
            },
            colors: {
                neutral: colors.neutral,
                'forest-green': '#2D5016',
                'olive-green': '#6B8E23',
                'earth-brown': '#8B4513',
                'sand-beige': '#F5F5DC',
                'natural-tan': '#D4A574',
                'leaf-green': '#4A7C23'
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-in': 'slideIn 0.6s ease-out'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                slideIn: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                }
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2D5016',
                    'primary-content': '#ffffff',
                    secondary: '#6B8E23',
                    accent: '#8B4513',
                    neutral: '#3D3D3D',
                    'base-100': '#F5F5DC',
                    info: '#2D5016',
                    'info-content': '#ffffff',
                    success: '#4CAF50',
                    warning: '#D4A574',
                    error: '#8B4513'
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
