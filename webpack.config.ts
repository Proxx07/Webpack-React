import path from 'path';
import { buildWebpack } from './src/config/build/buildWebpack';
import {BuildMode, BuildPaths, BuildPlatform} from './src/config/build/types/types';


interface IEnv {
  mode?: BuildMode
  port?: number
  analyzer?: boolean,
  platform?: BuildPlatform,
};

export default (env: IEnv) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, 'src'),
    html: path.resolve(__dirname, 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'build'),
  }

  const config = buildWebpack({
    port: env.port ?? 8080,
    mode: env.mode ?? 'development',
    paths: paths,
    isDev: env.mode === 'development',
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop'
  });
  return config;
};