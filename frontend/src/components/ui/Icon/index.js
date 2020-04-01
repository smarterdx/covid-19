import React from "react";
import './style.scss';
import {
  FaStethoscope,
  FaUserCircle,
  FaVial,
  FaUserInjured,
  FaCheck,
  FaEdit,
  FaStar
} from 'react-icons/fa';
import {
  IoMdFlask,
  IoMdBuild,
  IoIosSearch,
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline
} from 'react-icons/io';
import {
  MdShowChart
} from 'react-icons/md';
import {
  TiUser,
  TiArrowSortedDown,
  TiArrowRight,
  TiArrowDown,
  TiArrowLeft,
  TiArrowUp,
  TiWarning,
  TiPlus,
  TiTimes
} from 'react-icons/ti';
import {
  GoChevronDown,
  GoChevronLeft,
  GoChevronRight,
  GoChevronUp
} from 'react-icons/go';

export const Icon = ({
    icon,
    size,
    className,
    primary,
    secondary,
    tertiary
  }) => {
  let type;

  if (icon === "flask") {
    type = <IoMdFlask />;
  } else if (icon === "search") {
    type = <IoIosSearch />;
  } else if (icon === "user") {
    type = <FaUserCircle />;
  } else if (icon === "check") {
    type = <FaCheck />;
  } else if (icon === "patient") {
    type = <FaUserInjured />;
  } else if (icon === "stethoscope") {
    type = <FaStethoscope />;
  } else if (icon === "chart") {
    type = <MdShowChart />
  } else if (icon === "vial") {
    type = <FaVial />
  } else if (icon === "caret-down") {
    type = <GoChevronDown />
  } else if (icon === "caret-left") {
    type = <GoChevronLeft />
  } else if (icon === "caret-right") {
    type = <GoChevronRight />
  } else if (icon === "caret-up") {
    type = <GoChevronUp />
  } else if (icon === "arrow-down") {
    type = <TiArrowDown />
  } else if (icon === "arrow-left") {
    type = <TiArrowLeft />
  } else if (icon === "arrow-right") {
    type = <TiArrowRight />
  } else if (icon === "arrow-up") {
    type = <TiArrowUp />
  } else if (icon === "warning") {
    type = <TiWarning />
  } else if (icon === "plus") {
    type = <TiPlus />
  } else if (icon === "close") {
    type = <TiTimes />
  } else if (icon === "edit") {
    type = <FaEdit />
  } else if (icon === "star") {
    type = <FaStar />
  } else if (icon === "plus-outline") {
    type = <IoIosAddCircleOutline />
  } else if (icon === "minus-outline") {
    type = <IoIosRemoveCircleOutline />
  }

  return (
    <span
      className={`
        icon
        ${className && className}
        ${primary && 'primary'}
        ${secondary && 'secondary'}
        ${tertiary && 'tertiary'}
      `}
      style={{
        fontSize: `${size}px`,
      }}
    >
      {type}
    </span>
  );
};
