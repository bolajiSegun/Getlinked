const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M1.357 0h6.786c.36 0 .705.147.96.41.254.263.397.619.397.99s-.143.727-.398.99c-.254.262-.6.41-.96.41H1.358c-.36 0-.705-.147-.96-.41A1.423 1.423 0 0 1 0 1.4C0 1.029.143.673.397.41c.255-.263.6-.41.96-.41Zm9.5 11.2h6.786c.36 0 .705.148.96.41.254.263.397.619.397.99s-.143.727-.398.99c-.254.262-.6.41-.96.41h-6.785c-.36 0-.705-.148-.96-.41a1.423 1.423 0 0 1-.397-.99c0-.371.143-.727.398-.99.254-.262.6-.41.96-.41Zm-9.5-5.6h16.286c.36 0 .705.147.96.41.254.263.397.619.397.99s-.143.727-.398.99c-.254.262-.6.41-.96.41H1.358c-.36 0-.705-.148-.96-.41A1.423 1.423 0 0 1 0 7c0-.371.143-.727.397-.99.255-.263.6-.41.96-.41Z"
    />
  </svg>
);

const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <circle cx={11.5} cy={11.5} r={11} stroke="url(#a)" />
    <path
      fill="#F8F8F8"
      d="M6.308 16.692a1.05 1.05 0 0 0 1.485 0l3.713-3.713 3.714 3.713a1.05 1.05 0 0 0 1.485-1.485l-3.714-3.713 3.714-3.714a1.05 1.05 0 0 0-1.485-1.485l-3.714 3.714-3.713-3.714A1.05 1.05 0 0 0 6.307 7.78l3.714 3.714-3.714 3.713a1.05 1.05 0 0 0 0 1.485Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={11.5}
        x2={11.5}
        y1={0}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#903AFF" />
        <stop offset={1} stopColor="#FF26B9" />
      </linearGradient>
    </defs>
  </svg>
);

const CurveLineMob = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={117}
    height={11}
    fill="none"
    {...props}
  >
    <path
      stroke="#FF26B9"
      strokeWidth={3}
      d="M1 9C20.242 3.718 70.727-3.678 116 9"
    />
  </svg>
);

const CurveLineDes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={255}
    height={17}
    fill="none"
    {...props}
  >
    <path
      stroke="#FF26B9"
      strokeWidth={5}
      d="M1 14.043c42.333-8.333 153.4-20 253 0"
    />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
  </svg>
);

const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M6.045 0H0l7.134 9.362L.389 17h2.288l5.517-6.247L12.954 17H19l-7.434-9.756L17.964 0h-2.289l-5.17 5.853L6.045 0Zm7.773 15.3L3.455 1.7h1.727l10.364 13.6h-1.728Z"
    />
  </svg>
);

const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#F8F8F8"
      d="M7 11.5h2.5l1-4H7v-2c0-1.03 0-2 2-2h1.5V.14C10.174.097 8.943 0 7.643 0 4.928 0 3 1.657 3 4.7v2.8H0v4h3V20h4v-8.5Z"
    />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#F8F8F8"
      d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
    />
  </svg>
);

const AddressIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#F8F8F8"
      d="M6.5 0c1.724 0 3.377.677 4.596 1.883A6.393 6.393 0 0 1 13 6.429c0 2.661-2.051 5.45-6.067 8.428a.727.727 0 0 1-.866 0C2.05 11.88 0 9.09 0 6.43c0-1.705.685-3.34 1.904-4.546A6.537 6.537 0 0 1 6.5 0Zm0 4.286c-.575 0-1.126.225-1.532.627a2.131 2.131 0 0 0-.635 1.516c0 .568.229 1.113.635 1.515.406.402.957.627 1.532.627.575 0 1.126-.225 1.532-.627.406-.402.635-.947.635-1.515 0-.569-.229-1.114-.635-1.516A2.179 2.179 0 0 0 6.5 4.286Z"
    />
  </svg>
);

const PhoneCallingIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#F8F8F8"
      d="M12 6a6.001 6.001 0 0 0-6-6v1.2A4.802 4.802 0 0 1 10.8 6H12ZM0 4.8v-3a.6.6 0 0 1 .6-.6h3a.6.6 0 0 1 .6.6v2.4a.6.6 0 0 1-.6.6H2.4a4.8 4.8 0 0 0 4.8 4.8V8.4a.6.6 0 0 1 .6-.6h2.4a.6.6 0 0 1 .6.6v3a.6.6 0 0 1-.6.6h-3A7.2 7.2 0 0 1 0 4.8Z"
    />
    <path
      fill="#F8F8F8"
      d="M9.326 4.623c.18.436.274.905.274 1.377H8.52A2.52 2.52 0 0 0 6 3.48V2.4a3.6 3.6 0 0 1 3.326 2.223Z"
    />
  </svg>
);

const CircleCheckMark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <circle cx={8.5} cy={8.5} r={8.5} fill="#2DE100" />
    <path stroke="#fff" strokeWidth={2} d="m5 8 2 2.5L13.5 6" />
  </svg>
);

const BackIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <circle cx={11.5} cy={11.5} r={11} stroke="url(#a)" />
    <path stroke="#fff" d="M12.267 9.2 9.2 12.267l3.067 2.3" />
    <defs>
      <linearGradient
        id="a"
        x1={11.5}
        x2={11.5}
        y1={0}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#903AFF" />
        <stop offset={1} stopColor="#FF26B9" />
      </linearGradient>
    </defs>
  </svg>
);

const StarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke="none"
    {...props}
  >
    <path
      stroke="none"
      d="m12 3 1.43 5.312c.175.648.262.972.434 1.237a2 2 0 0 0 .587.587c.265.172.589.26 1.237.434L21 12l-5.312 1.43c-.648.175-.972.262-1.237.434a1.999 1.999 0 0 0-.587.587c-.172.265-.26.589-.434 1.237L12 21l-1.43-5.312c-.175-.648-.262-.972-.434-1.237a2 2 0 0 0-.587-.587c-.265-.172-.589-.26-1.237-.434L3 12l5.312-1.43c.648-.175.972-.262 1.237-.434a2 2 0 0 0 .587-.587c.172-.265.26-.589.434-1.237L12 3Z"
    />
  </svg>
);

export {
  MenuIcon,
  CloseIcon,
  CurveLineMob,
  CurveLineDes,
  InstagramIcon,
  FacebookIcon,
  XIcon,
  LinkedinIcon,
  AddressIcon,
  PhoneCallingIcon,
  CircleCheckMark,
  BackIcon,
  StarIcon,
};
