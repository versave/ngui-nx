import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
    projectRoot: './src',
    sourceRoot: './src',
    projectName: 'ngui-nx',
    distFolder: './dist/ngui-nx', // output directory of your Angular build artifacts
    outDir: './dist/static', // directory for scully build artifacts
    defaultPostRenderers: [],
    extraRoutes: ['/404'],
    routes: {},
    target: 'targets',
};
