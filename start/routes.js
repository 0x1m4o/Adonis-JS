'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('pages.home', {title:'Home'})

Route.get('/about', ({ view, request, response })=> {
    console.log(request.url());
    return view.render('pages.about', {title: 'About'});
})

Route.get('/user', ({ view, request, response })=> {
    console.log(request.url());
    let user = {
        id: 1,
        name: 'Chandra'
    }

    return response.json(user);
}).as('userIndex');

Route.get('/user/:name?', ({ params })=> {
    
    const data = params.name ?? 'guest';
    console.log(data);
    return 'Profile ' + data;
}).as('userName')

Route.route('/user', ({request})=>{
    switch (request.method()) {
        case 'POST':
            return 'Post Method'; 
        case 'DELETE':
            return 'Delete Method'; 
        default:
            return 'Put Method';
    }
}, ['POST', 'PUT', 'DELETE'])

Route.get('/welcome', ({ view })=> {
    return view.render('welcome', {title: 'Welcome'});
})

Route.any('/*', ({view})=>{
 return view.render('404');
});