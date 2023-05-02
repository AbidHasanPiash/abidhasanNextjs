import { useState } from "react";

export const ReadMore = ({ text, limite }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="w-full inline">
        {isReadMore ? text.slice(0, limite) : text}
        <span onClick={toggleReadMore} className="text-red-500 cursor-pointer">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };