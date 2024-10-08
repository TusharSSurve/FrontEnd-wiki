const config = {
  logo: <span>Frontend.wiki</span>,
  project: {
    link: 'https://github.com/TusharSSurve/Frontend-wiki',
  },
  darkMode: true,
  footer: {
    content: '2024 © Tushar Surve',
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  gitTimestamp: null,
  sidebar: {
    toggleButton: false
  },
  head: function Head(props) {
    return (
      <>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon.svg"
        />
        <link rel="mask-icon" href="/icon.svg" color="#000000" />
        <link rel="shortcut icon" href="/icon.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="Discover a comprehensive collection of frontend development interview questions with detailed answers covering HTML, CSS, JavaScript, and React. Perfect for developers preparing for technical interviews or sharpening their web development skills."
        />
        <meta name="author" content="Tushar Surve" />
        <meta
          property="og:url"
          content=""
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta
          property="og:title"
          content='Frontend.wiki'
        />
        <meta
          property="og:description"
          content="Discover a comprehensive collection of frontend development interview questions with detailed answers covering HTML, CSS, JavaScript, and React. Perfect for developers preparing for technical interviews or sharpening their web development skills."
        />
        <meta
          property="og:image"
          content=""
        />
      </>
    );
  },
  navigation: false
}

export default config
