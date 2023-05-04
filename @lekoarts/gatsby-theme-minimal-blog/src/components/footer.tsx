import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import React from 'react';

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} Persian Masters Voice. All rights reserved.
      </div>
      <div
        className="social-icons"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          a: {
            margin: "0 10px",
          },
        }}
      >
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
    <span className="bi bi-facebook">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494V14.708h-3.128v-3.623h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.79.143v3.238l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.623h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
    </span>
  </a>
  <a href="https://www.twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
    <span className="bi bi-twitter">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.846.171-1.296.171-.314 0-.615-.03-.916-.085.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.557z"/></svg>
    </span>
    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
    <span className="bi bi-linkedin">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.225 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.208.79 24 1.77 24h20.452C23.21 24 24 23.21 24 22.23V1.77C24 .79 23.21 0 22.225 0zM3.882 20.147H6.74V8.997H3.882v11.15zM5.31 7.433a1.623 1.623 0 0 1 0-3.248 1.625 1.625 0 1 1-.001 3.248zm14.01 12.714h-2.845V14.77c0-1.283-.025-2.937-1.785-2.937-1.786 0-2.062 1.4-2.062 2.847v5.468H9.582V8.997h2.733v1.522c.381-.724 1.321-1.766 2.718-1.766 2.907 0 3.288 1.915 3.288 4.408l-.002 7.976z"/></svg>
    </span>
  </a>
  </a>
      </div>
    </footer>
  )
}

export default Footer
