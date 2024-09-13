import { useFetchData } from "../hooks";
import smallButton from "../header/SmallButton";

export default function Home(){
  const { data: categories, error } = useFetchData("process.env.categories");

   if(error) return <p>Error: { error } </p>;

  return (
    categories.map(() => {

     

    })
  );
}

