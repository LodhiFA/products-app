import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'

interface IImageProps {
  src: string
  className?: string
}

export const ProductImage = (props: IImageProps) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)

  useEffect(() => {
    setLoadedSrc(null)

    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src)
      }
      const image = new Image()
      image.addEventListener('load', handleLoad)
      image.src = props.src
      return () => {
        image.removeEventListener('load', handleLoad)
      }
    }
  }, [props.src])

  if (loadedSrc === props.src) {
    return <img {...props} />
  }

  return (
    <div style={{ height: '50%', textAlign: 'center', padding: '30% 0' }}>
      <Spinner animation='border' variant='primary' />
    </div>
  )
}
