import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "Advanced VFX",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_Advanced_VFX.jpeg",
  },
  {
    id: 2,
    title: "Ultra 3D Earth",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_Ultra_3D_Earth.jpeg",
  },
  {
    id: 3,
    title: "Colorful Glitch Effects",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_Colorful_Glitch_Effects.jpeg",
  },
  {
    id: 4,
    title: "FX Console Plugin",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_FX_Console_Plugin.jpeg",
  },
  {
    id: 5,
    title: "Realistic Raindrop Effect",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_Realistic_Raindrop_Effect.jpeg",
  },
  {
    id: 6,
    title: "Cinematic Title Design",
    description: "Learn advanced VFX course with use to gain more knowledge",
    views: "192K",
    likes: "80K",
    imageUrl: "/URL_of_image_for_Cinematic_Title_Design.jpeg",
  },
];

const CoursesList = () => {
  return (
    <div className="flex-grow overflow-y-auto relative">
      <div className="absolute left-0 w-10 border-2 h-full" />
      <div className="absolute right-0 w-10 border-2 h-full" />
      <div className="mx-12 sm:mx-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
