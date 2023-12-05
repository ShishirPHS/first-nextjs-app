const DynamicPage = ({ params }) => {
  //   console.log(params);
  return (
    <div>
      <h2>This is dynamic page: {params.id}</h2>
    </div>
  );
};

export default DynamicPage;
