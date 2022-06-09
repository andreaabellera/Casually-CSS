import pkg from './package.json';

export default {
    input: './create.js',
    output: [
        {
            name: 'casuallycss',
            file: pkg.module,
            format: 'es'
        }
    ]
};