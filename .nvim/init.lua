require("task")

require("format").setup({
	filetypes = {
		glsl = require("format.builtins.prettier"),
	},
})
