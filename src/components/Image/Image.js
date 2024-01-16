function Image({ src, alt = 'Image', className, otherProps }) {
  return <img src={src} alt={alt} className={className} {...otherProps} />
}

export default Image
