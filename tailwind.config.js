module.exports = {
    purge: {
        content: [
            './app/**/*.html.erb',
            './app/helpers/**/*.rb',

        ],
        safelist: [
            'bg-yellow-700',
            'bg-yellow-600',
            'h-8',
            'inline-flex',
            'z-auto',
            'relative',
            'bg-white',
            'ml-2',
            'absolute'
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
