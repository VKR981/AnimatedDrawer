import * as React from "react"
import Svg, { Path } from "react-native-svg"


const MenuIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </Svg>
)
export default MenuIcon
