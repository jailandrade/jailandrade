function route(pathname, routes, res) {
    console.log('About to route a request for ' + pathname);
    if (typeof routes[pathname] === 'function') {
        routes[pathname](res, pathname);
    } else {
        console.log('No request routes found for ' + pathname);
    }
}

exports.route = route;
