export async function getServerSideProps({ context }) {
  // Fetch data from external API
  const data = await fetch(`YOUR_API`);

  // Returning the fetched data
  return { props: { data } };
}

function SSRPage({ data }) {
  // Displaying the data to the client
  return <div>{data}</div>;
}

export default SSRPage;
