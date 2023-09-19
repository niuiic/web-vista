export const useDebounce = <T extends (...args: any[]) => any>(
  fn: T,
  options?: {
    waitTime?: number
  }
): T => {
  let lastTriggerTime: number | undefined
  let timer: NodeJS.Timeout

  const fixedOptions = {
    waitTime: 500,
    ...(options ?? {})
  }

  const debouncedFn = (...args: any[]) => {
    const now = new Date().getTime()

    if (lastTriggerTime && lastTriggerTime + fixedOptions.waitTime > now) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => fn(...args), fixedOptions.waitTime)
    lastTriggerTime = now
  }

  return debouncedFn as unknown as T
}
