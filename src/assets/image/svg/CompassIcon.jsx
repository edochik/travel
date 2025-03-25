const CompassIcon = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g
        stroke="white"
        strokeLinejoin="round"
        strokeWidth="12"
        clipPath="url(#a)"
      >
        <path
          strokeLinecap="round"
          d="m22 170 47.906-78.702a64 64 0 0 1 21.392-21.392L170 22l-47.906 78.702a63.984 63.984 0 0 1-21.392 21.392L22 170Z"
        />

        <path d="m78 78 36 36" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#ffffff" d="M0 0h192v192H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { CompassIcon };
