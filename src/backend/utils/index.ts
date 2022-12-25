const getCache = (): string => {
  let path = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
  const cache = process.platform === 'win32' ? 'AppData/Roaming' : '.cache';
  const name = process.env.APP_NAME ?? process.env.npm_package_name;

  if (path) path += `/${cache}/${name}`;
  return path;
};

export default getCache;
