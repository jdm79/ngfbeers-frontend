import Head from 'next/head'

const Header = () => {
  return (
    <div>
      <Head>
        <title>Sepono Properties</title>
        <meta property="og:title" content="Sepono Properties" key="title" />
        <meta
          name="description"
          content="Short-term and long-term lettings in London. Holiday accommodation and rentals."
          key="desc"
        />
         <meta
          property="og:image"
          content="https://res.cloudinary.com/dlrwbckxi/image/upload/v1676291550/Image_13-02-2023_at_12.31_yignpj.jpg"
        />
      </Head>
    </div>
  )
}

export default Header;