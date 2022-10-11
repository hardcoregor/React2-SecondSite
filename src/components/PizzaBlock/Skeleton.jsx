import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="129" cy="124" r="120" /> 
    <rect x="0" y="261" rx="15" ry="15" width="280" height="30" /> 
    <rect x="0" y="305" rx="15" ry="15" width="280" height="88" /> 
    <rect x="2" y="409" rx="15" ry="15" width="101" height="33" /> 
    <rect x="122" y="406" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;