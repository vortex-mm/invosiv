import { SVGProps } from "react";

export function CrossIcon(props: SVGProps<SVGSVGElement & { fill: string }>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <mask id="ipSCloseOne0">
        <g fill="none" strokeLinejoin="round" strokeWidth="4">
          <path
            fill="#fff"
            stroke="#fff"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
          ></path>
          <path
            stroke="#000"
            strokeLinecap="round"
            d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"
          ></path>
        </g>
      </mask>
      <path
        fill={props.fill}
        d="M0 0h48v48H0z"
        mask="url(#ipSCloseOne0)"
      ></path>
    </svg>
  );
}

export function DashboardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#888888"
        d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"
      ></path>
    </svg>
  );
}

// export function DarkMode(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       // width="1em"
//       // height="1em"
//       viewBox="0 0 24 24"
//       {...props}
//     >
//       <path
//         fill="#888888"
//         d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22C6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762Zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455Zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455Z"
//       ></path>
//     </svg>
//   );
// }

export function DarkMode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="#888888"
        d="M244 96a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12V72a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12ZM144 60h4v4a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24h-4v-4a12 12 0 0 0-24 0v4h-4a12 12 0 0 0 0 24Zm75.81 90.38A12 12 0 0 1 222 162.3A100 100 0 1 1 93.7 34a12 12 0 0 1 15.89 13.6A85.12 85.12 0 0 0 108 64a84.09 84.09 0 0 0 84 84a85.22 85.22 0 0 0 16.37-1.59a12 12 0 0 1 11.44 3.97ZM190 172A108.13 108.13 0 0 1 84 66a76 76 0 1 0 106 106Z"
      ></path>
    </svg>
  );
}

export function LightMode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#888888"
        d="M12 4q-.425 0-.713-.288T11 3V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v1q0 .425-.288.713T12 4Zm0 19q-.425 0-.713-.288T11 22v-1q0-.425.288-.713T12 20q.425 0 .713.288T13 21v1q0 .425-.288.713T12 23Zm9-10q-.425 0-.713-.288T20 12q0-.425.288-.713T21 11h1q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-1ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h1q.425 0 .713.288T4 12q0 .425-.288.713T3 13H2Zm16-7q-.275-.275-.275-.688T18 4.6l.35-.375q.275-.3.7-.3t.725.3q.3.3.3.725t-.3.725l-.375.35q-.3.275-.7.275T18 6ZM4.225 19.775q-.3-.3-.3-.725t.3-.725l.375-.35q.3-.275.7-.275t.7.3q.275.275.288.7T6 19.4l-.35.375q-.275.3-.7.3t-.725-.3Zm14.1 0l-.35-.375q-.275-.3-.275-.7t.3-.7q.275-.275.7-.287t.7.287l.375.35q.3.275.3.7t-.3.725q-.3.3-.725.3t-.725-.3ZM4.6 6l-.375-.35q-.3-.275-.3-.7t.3-.725q.3-.3.725-.3t.725.3l.35.375q.275.3.275.7T6 6q-.275.275-.687.275T4.6 6ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"
      ></path>
    </svg>
  );
}

// export function LeftAside(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="1em"
//       height="1em"
//       viewBox="0 0 24 24"
//       {...props}
//     >
//       <path
//         fill="#888888"
//         d="M17.59 18L19 16.59L14.42 12L19 7.41L17.59 6l-6 6z"
//       ></path>
//       <path
//         fill="#888888"
//         d="m11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"
//       ></path>
//     </svg>
//   );
// }

// export function RightAside(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="1em"
//       height="1em"
//       viewBox="0 0 24 24"
//       {...props}
//     >
//       <path
//         fill="#888888"
//         d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"
//       ></path>
//       <path
//         fill="#888888"
//         d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"
//       ></path>
//     </svg>
//   );
// }

export function RightAside(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#888888" d="m10 17l5-5l-5-5v10z"></path>
    </svg>
  );
}

export function LeftAside(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#888888" d="m14 7l-5 5l5 5V7z"></path>
    </svg>
  );
}

export function ActivityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="#888888"
        fillRule="evenodd"
        d="M0 1.5A.5.5 0 0 1 .5 1h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-4 3A.5.5 0 0 1 .5 7h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-4 3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function MatchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.561 4.5h20.337a1.263 1.263 0 0 1 1.159 1.794l-4.173 14.14a2.531 2.531 0 0 1-2.218 1.795H7.329a1.263 1.263 0 0 1-1.159-1.795l4.173-14.14A2.53 2.53 0 0 1 12.561 4.5Zm7.773 21.271h20.337a1.263 1.263 0 0 1 1.159 1.795l-4.173 14.14a2.53 2.53 0 0 1-2.218 1.794H15.102a1.263 1.263 0 0 1-1.159-1.794l4.173-14.14a2.531 2.531 0 0 1 2.218-1.795Z"
      ></path>
    </svg>
  );
}

export function SuccessIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path
        fill="currentColor"
        d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
      ></path>
    </svg>
  );
}

export function LoadingSpinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1">
        <animate
          id="svgSpinnersBlocksShuffle30"
          fill="freeze"
          attributeName="x"
          begin="0;svgSpinnersBlocksShuffle3b.end"
          dur="0.2s"
          values="1;13"
        ></animate>
        <animate
          id="svgSpinnersBlocksShuffle31"
          fill="freeze"
          attributeName="y"
          begin="svgSpinnersBlocksShuffle38.end"
          dur="0.2s"
          values="1;13"
        ></animate>
        <animate
          id="svgSpinnersBlocksShuffle32"
          fill="freeze"
          attributeName="x"
          begin="svgSpinnersBlocksShuffle39.end"
          dur="0.2s"
          values="13;1"
        ></animate>
        <animate
          id="svgSpinnersBlocksShuffle33"
          fill="freeze"
          attributeName="y"
          begin="svgSpinnersBlocksShuffle3a.end"
          dur="0.2s"
          values="13;1"
        ></animate>
      </rect>
      <rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1">
        <animate
          id="svgSpinnersBlocksShuffle34"
          fill="freeze"
          attributeName="y"
          begin="svgSpinnersBlocksShuffle30.end"
          dur="0.2s"
          values="13;1"
        ></animate>
        <animate
          id="svgSpinnersBlocksShuffle35"
          fill="freeze"
          attributeName="x"
          begin="svgSpinnersBlocksShuffle31.end"
          dur="0.2s"
          values="1;13"
        ></animate>
        <animate
          id="svgSpinnersBlocksShuffle36"
          fill="freeze"
          attributeName="y"
          begin="svgSpinnersBlocksShuffle32.end"
          dur="0.2s"
          values="1;13"
        ></animate>
        <animate
          id="svgSpinnersBlocksShuffle37"
          fill="freeze"
          attributeName="x"
          begin="svgSpinnersBlocksShuffle33.end"
          dur="0.2s"
          values="13;1"
        ></animate>
      </rect>
      <rect width="10" height="10" x="13" y="13" fill="currentColor" rx="1">
        <animate
          id="svgSpinnersBlocksShuffle38"
          fill="freeze"
          attributeName="x"
          begin="svgSpinnersBlocksShuffle34.end"
          dur="0.2s"
          values="13;1"
        ></animate>
        <animate
          id="svgSpinnersBlocksShuffle39"
          fill="freeze"
          attributeName="y"
          begin="svgSpinnersBlocksShuffle35.end"
          dur="0.2s"
          values="13;1"
        ></animate>
        <animate
          id="svgSpinnersBlocksShuffle3a"
          fill="freeze"
          attributeName="x"
          begin="svgSpinnersBlocksShuffle36.end"
          dur="0.2s"
          values="1;13"
        ></animate>
        <animate
          id="svgSpinnersBlocksShuffle3b"
          fill="freeze"
          attributeName="y"
          begin="svgSpinnersBlocksShuffle37.end"
          dur="0.2s"
          values="1;13"
        ></animate>
      </rect>
    </svg>
  );
}
