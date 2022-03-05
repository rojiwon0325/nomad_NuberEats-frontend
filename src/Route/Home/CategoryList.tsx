import { useQuery } from "@apollo/client";
import { FINDALLCATEGORY_QUERY } from "Apollo/Query/category";
import {
  findAllCategory,
  findAllCategory_findAllCategory_result,
} from "Igql/findAllCategory";

const CategoryList = () => {
  const { data, loading } = useQuery<findAllCategory>(FINDALLCATEGORY_QUERY);
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="w-full py-1 px-3 flex items-center justify-center flex-wrap bg-white">
      {loading ? (
        <div>loading...</div>
      ) : (
        data?.findAllCategory?.result?.map(({ id, name, coverImage }) => (
          <Category key={id + ""} name={name} coverImage={coverImage} />
        ))
      )}
    </div>
  );
};
export default CategoryList;

const Category: React.FC<{ name: string; coverImage: string }> = ({
  name,
  coverImage,
}) => {
  return (
    <div className="mx-1 flex flex-col items-center cursor-pointer group">
      <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-black group-hover:bg-opacity-10">
        <img src={coverImage} className="h-4/6 w-4/6" />
      </div>
      <span className="mt-1 text-sm text-center font-bold">{name}</span>
    </div>
  );
};
