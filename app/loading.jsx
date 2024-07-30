const MyPage = ({ data }) => {
  if (!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>My Page</h1>
      <p>{data}</p>
    </div>
  );
};

export default MyPage;
