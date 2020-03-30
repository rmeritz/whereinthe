const { environment } = require('@rails/webpacker')

module.exports = environment

// Fix mapbox_gl _type_of is not defined error
// https://github.com/mapbox/mapbox-gl-js/issues/3422#issuecomment-577293154
environment.loaders.delete('nodeModules')
