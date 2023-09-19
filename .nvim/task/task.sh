if [ "$1"="format" ]; then
	pnpm prettier -w "**/*.(scss|css|ts|js|cjs|html|vue|frag|vert)"
fi
