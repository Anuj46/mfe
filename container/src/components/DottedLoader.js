import React from "react";

// Keyframes for the animations
const turnRight = `@keyframes turnRight {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

const turnLeft = `@keyframes turnLeft {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}`;

const DottedLoader = () => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        marginTop: "100px",
        height: "calc(100vh - 64px)",
      }}
    >
      <style>{turnRight}</style>
      <style>{turnLeft}</style>
      <div
        style={{
          content: '""',
          position: "absolute",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          borderWidth: "4px",
          borderStyle: "dotted solid dotted solid",
          borderColor: "#0075ff",
          animation: "turnLeft 1.5s linear infinite",
          left: "calc(50% - 50px)",
          top: "calc(45% - 50px)",
        }}
      ></div>
      <div
        style={{
          content: '""',
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          borderWidth: "4px",
          borderStyle: "dotted dotted solid solid",
          borderColor: "#0075ff",
          animation: "turnRight 1.5s linear infinite",
          left: "calc(50% - 75px)",
          top: "calc(45% - 75px)",
        }}
      ></div>
    </div>
  );
};

export default DottedLoader;
