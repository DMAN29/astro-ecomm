import React from "react";

interface SkeletonProps {
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
  className?: string;
  animation?: "pulse" | "none";
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
  height,
  width,
  borderRadius,
  className = "",
  animation = "pulse",
  style,
}) => {
  const styles: React.CSSProperties = { ...style };
  if (height) styles.height = height;
  if (width) styles.width = width;
  if (borderRadius) styles.borderRadius = borderRadius;

  return (
    <div
      className={`bg-gray-200 ${
        animation === "pulse" ? "animate-pulse" : ""
      } ${className}`}
      style={styles}
    />
  );
};

export default Skeleton;
