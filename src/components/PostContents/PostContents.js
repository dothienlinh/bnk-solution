function PostContents({ children, className }) {
  return (
    <h3 className={`my-[10px] text-[#666] leading-8 ${className}`}>
      {children}
    </h3>
  )
}

export default PostContents
