import { AuthLayout } from "Component";

const NotFound: React.FC = () => {
  return (
    <AuthLayout>
      <div className="h-full w-full flex-center">
        <h1 className="font-bold text-3xl">Page Not Found</h1>
      </div>
    </AuthLayout>
  );
};

export default NotFound;
