const app = document.querySelector('#app')

const modules = import.meta.glob('./components/**/index.ts')

const componentNames = Object.entries(modules)
  .map(([key]) => {
    const matched = key.match(/\.\/components\/(.*)\/index.ts/)
    if (matched) {
      return matched[1]
    }
    return undefined
  })
  .filter((x) => x) as string[]

const getComponentName = () => window.location.pathname.slice(1)

const clearPage = () => {
  while (app?.firstChild) {
    app.removeChild(app.firstChild)
  }
}

const renderComponentList = () => {
  clearPage()

  const container = document.createElement('ol')

  container.addEventListener('click', (e) => {
    const componentName: string = (e.target as HTMLElement).innerText
    history.pushState(undefined, '', componentName)
    renderComponent(componentName)
  })

  componentNames.forEach((component) => {
    const entry = document.createElement('li')
    entry.setAttribute('style', 'user-select: none; cursor: pointer;')
    entry.innerText = component
    container.appendChild(entry)
  })

  app?.appendChild(container)
}

const renderComponent = async (componentName: string) => {
  if (!app) {
    return
  }
  clearPage()
  const component = ((await modules[`./components/${componentName}/index.ts`]()) as any).default
  app.innerHTML = component.html
  if (component.css) {
    const style = document.createElement('style')
    style.textContent = component.css
    app.appendChild(style)
  }
  if (component.js) {
    const script = document.createElement('script')
    script.setAttribute('type', 'module')
    script.textContent = component.js
    app.appendChild(script)
  }
}

const renderPage = () => {
  const componentName = getComponentName()
  if (componentNames.includes(componentName)) {
    renderComponent(componentName)
  } else {
    renderComponentList()
  }
}

window.addEventListener('popstate', renderPage)
renderPage()
