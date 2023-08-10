'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Normal route
// Route.on('/').render('pages.home', {title:'Home'})
// Route.on('/about').render('pages.about', {title:'About'})
// Using Controller (app/Controllers/Http/)
Route.get('/', 'PageController.home');
Route.get('/about', 'PageController.about');

Route.get('/welcome', ({ view })=> {
    return view.render('welcome', {title: 'Welcome'});
})

// Routing data user
Route.group(()=> {
    Route.get('/', ({request, response })=> {
        console.log(request.url());
        let user = {
            id: 1,
            name: 'Chandra'
        }
    
        return response.json(user);
    }).as('userIndex');
    
    Route.get('/:name?', ({ params })=> {
        
        const data = params.name ?? 'guest';
        console.log(data);
        return 'Profile ' + data;
    }).as('userName')
    
    Route.route('/', ({request})=>{
        switch (request.method()) {
            case 'POST':
                return 'Post Method'; 
            case 'DELETE':
                return 'Delete Method'; 
            default:
                return 'Put Method';
        }
    }, ['POST', 'PUT', 'DELETE'])
    
}).prefix('/user');

Route.any('/*', ({view})=>{
 return view.render('404');
});