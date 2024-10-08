import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  search: {
    codeblocks: false
  }
})

export default withNextra({
  reactStrictMode: false
})