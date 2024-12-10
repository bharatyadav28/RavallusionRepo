import { Like, Views } from "@/lib/svg_icons";
import Image from "next/image";
import Card from "./Card";

const CourseCard = ({ course }) => {
  const { title, description, views, likes, imageUrl } = course;

  return (
    <Card>
      <Image
        src={imageUrl}
        alt={title}
        width={100}
        height={100}
        className="w-full h-40 2xl:!h-48 object-cover rounded-2xl"
      />
      <div className="flex flex-col gap-3 2xl:gap-4">
        <div>
          <h3 className="text-lg 2xl:text-2xl font-bold">{title}</h3>
          <p className="text-gray-400 text-xs 2xl:text-base">{description}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs ">
          <span className="flex items-center space-x-1 text-xs 2xl:text-sm">
            <Views />
            <span>{views}</span>
          </span>
          {/* <span className="flex items-center space-x-1">
            <Like />
            <span>{likes}</span>
          </span> */}
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
