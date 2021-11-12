import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'decisao-library',
  plugins: [
    sass({
      includePaths: ['node_modules'],
      injectGlobalPaths: [
        'src/global/styles/variables.scss',
        'src/global/styles/mixins.scss',
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
