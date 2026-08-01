import { useScrollProgress } from '../../hooks/useScrollProgress'

export default function ScrollProgress() {
  const p = useScrollProgress()
  return <div id="scroll-bar" style={{ width: `${p}%` }} aria-hidden />
}
