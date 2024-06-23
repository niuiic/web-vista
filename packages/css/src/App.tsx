import { useEffect, useState } from 'react'
import cls from './app.module.scss'

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

const List = (props: { onClick: (name: string) => void }) => {
  return (
    <ol className={cls.list}>
      {componentNames.map((name) => (
        <li key={name} onClick={() => props.onClick(name)} className={cls.entry}>
          {name}
        </li>
      ))}
    </ol>
  )
}

export const App = () => {
  const [showList, setShowList] = useState(true)
  const [Component, setComponent] = useState<any>()

  const renderComponent = async (name: string) => {
    const component = await modules[`./components/${name}/index.ts`]().then((x: any) => <x.default.impl />)
    setComponent(component)
    setShowList(false)
  }

  const renderPage = () => {
    const componentName = getComponentName()
    if (componentNames.includes(componentName)) {
      renderComponent(componentName)
    } else {
      setShowList(true)
    }
  }

  const clickEntry = (name: string) => {
    history.pushState(undefined, '', name)
    renderComponent(name)
  }

  useEffect(() => {
    renderPage()
    window.addEventListener('popstate', renderPage)
  })

  return <div className={cls.app}>{showList ? <List onClick={clickEntry} /> : Component}</div>
}
