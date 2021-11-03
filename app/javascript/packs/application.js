// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import '../css/application.css'

require('jquery')
require('easy-autocomplete')

require("trix")
require("@rails/actiontext")

// Custom files import
import ShowPostsPage from '../pages/posts/show'
import FormPostsPage from '../pages/posts/form'

document.addEventListener('turbolinks:load', () => {
  ShowPostsPage()
  FormPostsPage()
})
