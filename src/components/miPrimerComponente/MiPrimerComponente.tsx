import { FC } from 'react'

interface MiPrimerComponenteProps {
  text: string
  color: string
  fontSize: number
}

export const MiPrimerComponente: FC<MiPrimerComponenteProps> = ({
  text,
  color,
  fontSize,
}) => {
  return (
    <div style={{ color: `${color}`, fontSize: `${fontSize}px` }}>{text}</div>
  )
}
