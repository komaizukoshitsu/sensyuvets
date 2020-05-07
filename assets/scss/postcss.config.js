module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ['layouts/**/*.html'],
            whitelist: [
                'hightlight',
                'pre',
                'code',
                'blockquote',
                'content',
                'h3',
                'h4',
                'ul',
                'li',
            ]
        },
        autoprefixer: {
            browsers: [
                'last 2 versions',
                'ie >= 11',
                'Android >= 4'
            ]
        }
    }
}