import { StarIcon } from "@heroicons/react/24/solid";

export function StarIcons() {
  return (
    <div className="flex items-center my-3 text-black ">
      <StarIcon className=" h-3 w-3 me-1 flex-shrink-0" />
      <StarIcon className=" h-3 w-3 me-1 flex-shrink-0" />
      <StarIcon className=" h-3 w-3 me-1 flex-shrink-0" />
      <StarIcon className=" h-3 w-3 me-1 flex-shrink-0" />
      <StarIcon className=" h-3 w-3 me-1 flex-shrink-0" />
    </div>
  );
}
