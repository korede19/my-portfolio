import Head from "next/head";

const Meta = ({
  title = "Korede Digital Designs",
  description = "Hi, I'm Korede, a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, user-friendly websites.",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
    </Head>
  );
};

export default Meta;
