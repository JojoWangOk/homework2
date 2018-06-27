const Tapable = require('tapable')

class DB extends Tapable {
  constructor(options) {
    // TODO
		super()
    this.options = options
  }

  request() {
    // TODO
    return new Promise((resolve, reject) => {
      let options = this.options
			this.applyPluginsWaterfall('endpoint', options)
				.then((res) => {
					console.log(11111, res)
					resolve(res)
				})
    })
  }
}

module.exports = DB