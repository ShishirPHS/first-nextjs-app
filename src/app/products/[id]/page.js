const DynamicPage = ({ params, searchParams }) => {
  //   console.log(searchParams);
  return (
    <div>
      <h2>This is dynamic page: {params.id}</h2>
      <p>Searched by: {searchParams.category}</p>
    </div>
  );
};

export default DynamicPage;
