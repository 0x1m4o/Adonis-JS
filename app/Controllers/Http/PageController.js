'use strict'

class PageController {
    home({view}){
        return view.render('pages.home')
    }
    about({view}){
        return view.render('pages.about', {title: 'About'});
    }
}

module.exports = PageController
