require("format").setup({
	temp_file = function(file_path)
		local core = require("core")
		local new_file_path = core.file.root_path()
			.. "/_"
			.. core.file.name(file_path)
			.. "."
			.. (core.file.extension(file_path) or "")
		return new_file_path
	end,
	filetypes = {
		glsl = require("format.builtins.prettier"),
	},
})

local task = require("task")
local output = require("task.output")

task.register({
	name = "eslint fix all",
	config = function()
		return {
			cmd = "pnpm",
			args = { "eslint", "--fix", [[**/*.{js,ts,tsx}]] },
		}
	end,
	on_exit = output.notify_done,
})

task.register({
	name = "format all",
	config = function()
		return {
			cmd = "pnpm",
			args = { "prettier", "-w", "**/*.(scss|css|ts|js|cjs|html|vue|frag|vert)" },
		}
	end,
	on_exit = output.notify_done,
})

task.register({
	name = "eslint fix current",
	config = function()
		return {
			cmd = "pnpm",
			args = { "eslint", "--fix", vim.api.nvim_buf_get_name(0) },
		}
	end,
	on_exit = output.notify_done,
})

task.register({
	name = "stylelint fix current",
	config = function()
		return {
			cmd = "pnpm",
			args = { "stylelint", "--fix", vim.api.nvim_buf_get_name(0) },
		}
	end,
	on_exit = output.notify_done,
})

task.register({
	name = "stylelint fix all",
	config = function()
		return {
			cmd = "pnpm",
			args = { "stylelint", "--fix", "**/*.(scss|css)" },
		}
	end,
	on_exit = output.notify_done,
})
