module.exports = {
    module: {
        rules: [
            // SASS has different line endings than SCSS
            // and cannot use semicolons in the markup
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^9.0.0
                        options: {
                            // This is the path to your variables
                            additionalData: "@import '@/styles/variables.scss'"
                        },
                    },
                ],
            },]
    }
}