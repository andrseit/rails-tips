module.exports = {
    purge: {
        content: [
            './app/**/*.html.erb',
            './app/helpers/**/*.rb',

        ],
        safelist: [
            'bg-yellow-700',
            'bg-yellow-600'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
