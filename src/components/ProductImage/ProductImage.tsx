import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'

interface IImageProps {
  /**Source of image (url) */
  src: string
  /**Css class that may be applied to resulting image */
  className?: string
  /**Alt property for image */
  alt: string
}

/**
 * Component to load images asynchronously.
 * 
 * The component accepts image source as props and loads image asynchronously.
 * 
 * Until the image is loaded, bootstrap Spinner component is returned.
 */
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
    return <img {...props} alt={props.alt} />
  }

  return (
    <div style={{ height: '50%', textAlign: 'center', padding: '30% 0' }}>
      <Spinner animation='border' variant='primary' />
    </div>
  )
}
