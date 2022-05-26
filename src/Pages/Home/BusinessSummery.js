import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faHammer,
  faPeopleGroup,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const BusinessSummery = () => {
  return (
    <div className="m-20">
      <h1 className="text-3xl text-secondary text-center">
        Our Service is Growing Day By day
      </h1>
      <div className="w-20 h-1 bg-secondary mx-auto my-6"></div>
      <div className="flex flex-wrap items-center justify-evenly">
        <div className="flex flex-col">
          <FontAwesomeIcon
            className="text-7xl text-primary font-extrabold "
            icon={faHammer}
          />
          <h1 className="text-4xl text-white text-center">300+</h1>
          <span className="text-xl">Tools distributed</span>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon
            className="text-7xl text-primary "
            icon={faPeopleGroup}
          />
          <h1 className="text-4xl text-white text-center">300+</h1>
          <span className="text-xl">Tools distributed</span>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon className="text-7xl text-primary " icon={faFlag} />
          <h1 className="text-4xl text-white text-center">300+</h1>
          <span className="text-xl">Tools distributed</span>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon
            className="text-7xl text-primary "
            icon={faThumbsUp}
          />
          <h1 className="text-4xl text-white text-center">300+</h1>
          <span className="text-xl">Tools distributed</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
