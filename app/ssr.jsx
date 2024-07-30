export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}

const MyPage = ({ data }) => (
  <div>
    <h1>My Page</h1>
    <p>{data}</p>
  </div>
);

export default MyPage;
