const getCache = (): string => {
  let path = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
  const cache = process.platform === 'win32' ? 'AppData/Roaming' : '.cache';
  const name = process.env.APP_NAME ?? process.env.npm_package_name;

  if (!path) throw new Error('Platform unknown. Cannot find cache folder');
  path += `/${cache}/${name ?? 'undefined'}`;
  return path;
};

export default getCache;
