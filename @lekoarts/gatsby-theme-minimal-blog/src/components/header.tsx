/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"
import HeaderTitle from "./header-title"
import HeaderMehdi from "./header-title-mehdi-logo"
import HeaderExternalLinks from "./header-external-links"

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <HeaderMehdi />
        <ColorModeToggle />
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        <HeaderExternalLinks />
      </div>
    </header>
  )
}

export default Header
