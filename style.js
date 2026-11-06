tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#FFF0F3',
                    100: '#FFCCD5',
                    200: '#FFB3C1',
                    300: '#FF8FA3',
                    400: '#FF758F',
                    500: '#FF4D6D',
                    600: '#C9184A',
                    800: '#800F2F',
                    900: '#590D22',
                }
            },
            fontFamily: {
                title: ['Dancing Script', 'cursive'],
                sans: ['Poppins', 'sans-serif'],
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});