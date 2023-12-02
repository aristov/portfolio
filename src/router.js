/**
 * @param {{path:string,render:function}[]} routes
 * @return {*|string|ElemType|*[]|string[]|ElemType[]}
 */
export function router(routes) {
  const pathname = decodeURIComponent(location.pathname).replace(/\/$/, '')
  let route, path
  for(route of routes) {
    path = route.path
    if(typeof path === 'string') {
      if(path.replace(/\/$/, '') === pathname) {
        return route.render()
      }
    }
    else if(path.test(pathname)) {
      return route.render()
    }
  }
}
