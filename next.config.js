/** @type {import('next').NextConfig} */
const path = require('path');
const dotenv = require('dotenv');
const toPath = (_path) => path.join(process.cwd(), _path);
let isProd = false;

if (process.env.NODE_ENV == 'production') {
    isProd = true;
    dotenv.config({ path: path.join(process.env.PWD, 'envs', '.env.production') });
} else {
    dotenv.config({ path: path.join(process.env.PWD, 'envs', '.env.development') });
}

const nextConfig = {
    publicRuntimeConfig: {
        PROJECT_ROOT: __dirname,
        API: process.env.API,
        HOSTNAME: process.env.HOSTNAME
        // SECRET: process.env.NEXT_AUTH_SECRET
    },
    serverRuntimeConfig: {
        API: process.env.API,
        HOSTNAME: process.env.HOSTNAME
        // SECRET: process.env.NEXT_AUTH_SECRET
    },
    compress: isProd,
    swcMinify: isProd,
    compiler: {
        removeConsole: isProd
    },
    reactStrictMode: true,
    images: {
        domains: ['dn-img-page.kakao.com', 'comic-superstring.naver.com', 'image-comic.pstatic.net']
    },
    webpack(config) {
        config.resolve.modules.push(__dirname);
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': toPath('components'),
            '@constants': toPath('constants'),
            '@env': toPath('env'),
            '@pages': toPath('pages'),
            '@public': toPath('public'),
            '@store': toPath('store'),
            '@styles': toPath('styles'),
            '@utils': toPath('utils')
        };
        return { ...config, mode: isProd ? 'production' : 'development' };
    }
};

module.exports = nextConfig;
