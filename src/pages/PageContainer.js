const PageContainer = ({ children }) => {
  return (
    <div class="col-md-10 col-sm-12 offset-md-2 px-0 main overflow-hidden">
      {children}
    </div>
  );
};

export default PageContainer;
