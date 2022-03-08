import { Helmet } from "react-helmet-async";

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>NotFound | NuberEats</title>
      </Helmet>
      <div className="h-full w-full flex-center">
        <h1 className="font-bold text-3xl">Page Not Found</h1>
      </div>
    </>
  );
};

export default NotFound;
