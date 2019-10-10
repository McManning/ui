
const path = require('path');
const { styles, theme } = require('./styleguide.styles');

// Where to find the root SASS file for loading styles across the page
const SASS_INDEX = path.join(__dirname, './src/styleguide.scss');

// Output path of deployable assets after `npm run deploy`
const BUILD_PATH = path.join(__dirname, './build');

// Where standard static vendor assets are loaded from.
const ASSETS_HOST = 'https://orwebdev02.rf.ohio-state.edu';

/**
 * Reconfigure Webpack for Styleguidist
 *
 * References:
 * - https://github.com/everydayhero/constructicon
 * - https://react-styleguidist.js.org/docs/configuration.html
 * - https://www.npmjs.com/package/@vxna/mini-html-webpack-template
 */
module.exports = {
    title: 'UI Components',
    usageMode: 'expand',
    styleguideDir: BUILD_PATH,
    skipComponentsWithoutExample: true,
    styles,
    theme,
    template: {
        favicon: ASSETS_HOST + '/assets/img/vendor/osu-navbar/favicon.ico',
        head: {
            scripts: [
                // jQuery is required for BS4 and React components that are just wrappers around
                // legacy jQuery-based components.
                { src: ASSETS_HOST + '/assets/js/vendor/jquery-3.2.1.min.js' },
                { src: ASSETS_HOST + '/assets/js/vendor/bootstrap-4.0.0.min.js' },

                // Vendor libraries required for certain custom components
                { src: ASSETS_HOST + '/assets/js/vendor/moment-2.14.1.min.js' },
            ]
        }
    },
    getComponentPathLine: (componentPath) => {
        // Naming convention for ../Component/index.js
        const dirname = path.dirname(componentPath, '.js');
        const name = dirname.split(path.sep).slice(-1)[0];

        // The assumption is that all (public) components are exported
        // by name from the primary index of the package.
        return 'import { ' + name + ' } from \'@oris/ui\'';
    },
    dangerouslyUpdateWebpackConfig: (webpackConfig, env) => {
        // Ignore any jQuery imports. They'll be resolved via the CDN script
        webpackConfig.externals = {
            jquery: 'jQuery'
        }

        return webpackConfig
    },
    require: [
        // Bake in global SASS styles together, rather than
        // using the webpack-method of directly importing into
        // each component's .js file. This is because we're including components
        // that are meant to work with gulp-sass, which does not have CSS module
        // support (At least in our configured gulpfile)
        SASS_INDEX
    ],
    moduleAliases: {
        // Aliasing so we don't have awful import '../../../..' in examples.
        '@oris/ui': path.join(__dirname, '.')
    },
    sections: [
        {
            name: '',
            content: 'src/readme.md'
        },
        {
            name: 'Components',
            content: 'src/component/readme.md',
            components: 'src/component/**/*.js',
            ignore: 'src/component/_legacy/*.js'
        },
        {
            name: 'Experimental',
            content: 'src/experimental/readme.md',
            components: 'src/experimental/**/*.js'
        }
    ]
};
