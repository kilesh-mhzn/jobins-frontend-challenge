import React from "react";

export interface BaseIconProps {
  size?: string;
  color?: string;
  className?: string;
}

export const IconClose: React.FC<BaseIconProps> = ({
  size = "1em",
  color = "currentColor",
  className,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill={color}
      height={size}
      width={size}
      {...props}
    >
      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
    </svg>
  );
};
export const IconRightChevron: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#f59f0a"
    >
      <g clipPath="url(#clip0_201_5319)">
        <path
          d="M9.29006 6.71002C8.90006 7.10002 8.90006 7.73002 9.29006 8.12002L13.1701 12L9.29006 15.88C8.90006 16.27 8.90006 16.9 9.29006 17.29C9.68006 17.68 10.3101 17.68 10.7001 17.29L15.2901 12.7C15.6801 12.31 15.6801 11.68 15.2901 11.29L10.7001 6.70002C10.3201 6.32002 9.68006 6.32002 9.29006 6.71002Z"
          fill="#f59f0a"
        />
      </g>
      <defs>
        <clipPath id="clip0_201_5319">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const IconLeftChevron: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#f59f0a"
    >
      <g clipPath="url(#clip0_201_5315)">
        <path
          d="M14.71 6.70998C14.32 6.31998 13.69 6.31998 13.3 6.70998L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.1 16.91 15.1 16.28 14.71 15.89L10.83 12L14.71 8.11998C15.1 7.72998 15.09 7.08998 14.71 6.70998Z"
          fill="#f59f0a"
        />
      </g>
      <defs>
        <clipPath id="clip0_201_5315">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconSun: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_201_4321)">
        <path
          d="M6.05 4.14005L5.66 3.75005C5.27 3.36005 4.64 3.37005 4.26 3.75005L4.25 3.76005C3.86 4.15005 3.86 4.78005 4.25 5.16005L4.64 5.55005C5.03 5.94005 5.65 5.94005 6.04 5.55005L6.05 5.54005C6.44 5.16005 6.44 4.52005 6.05 4.14005V4.14005ZM3.01 10.5H1.99C1.44 10.5 1 10.94 1 11.49V11.5C1 12.05 1.44 12.49 1.99 12.49H3C3.56 12.5 4 12.06 4 11.51V11.5C4 10.94 3.56 10.5 3.01 10.5ZM12.01 0.550049H12C11.44 0.550049 11 0.990049 11 1.54005V2.50005C11 3.05005 11.44 3.49005 11.99 3.49005H12C12.56 3.50005 13 3.06005 13 2.51005V1.54005C13 0.990049 12.56 0.550049 12.01 0.550049V0.550049ZM19.75 3.76005C19.36 3.37005 18.73 3.37005 18.34 3.75005L17.95 4.14005C17.56 4.53005 17.56 5.16005 17.95 5.54005L17.96 5.55005C18.35 5.94005 18.98 5.94005 19.36 5.55005L19.75 5.16005C20.14 4.77005 20.14 4.15005 19.75 3.76005V3.76005ZM17.94 18.8601L18.33 19.25C18.72 19.64 19.35 19.64 19.74 19.25C20.13 18.86 20.13 18.23 19.74 17.84L19.35 17.4501C18.96 17.0601 18.33 17.0701 17.95 17.4501C17.55 17.8501 17.55 18.4701 17.94 18.8601ZM20 11.49V11.5C20 12.05 20.44 12.49 20.99 12.49H22C22.55 12.49 22.99 12.05 22.99 11.5V11.49C22.99 10.94 22.55 10.5 22 10.5H20.99C20.44 10.5 20 10.94 20 11.49ZM12 5.50005C8.69 5.50005 6 8.19005 6 11.5C6 14.81 8.69 17.5 12 17.5C15.31 17.5 18 14.81 18 11.5C18 8.19005 15.31 5.50005 12 5.50005ZM11.99 22.4501H12C12.55 22.4501 12.99 22.01 12.99 21.46V20.5C12.99 19.95 12.55 19.51 12 19.51H11.99C11.44 19.51 11 19.95 11 20.5V21.46C11 22.01 11.44 22.4501 11.99 22.4501ZM4.25 19.24C4.64 19.63 5.27 19.63 5.66 19.24L6.05 18.85C6.44 18.46 6.43 17.8301 6.05 17.4501L6.04 17.4401C5.65 17.0501 5.02 17.0501 4.63 17.4401L4.24 17.83C3.86 18.23 3.86 18.85 4.25 19.24Z"
          fill="#f59f0a"
        />
      </g>
      <defs>
        <clipPath id="clip0_201_4321">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconMoon: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <path
        d="M9.97006 0.729993C10.1301 0.389993 9.85006 0.00999286 9.47006 0.0299929C3.47006 0.329993 -0.999943 5.85999 0.190057 11.99C0.970057 16.02 4.28006 19.21 8.33006 19.86C12.4001 20.52 16.1001 18.72 18.2001 15.71C18.4101 15.4 18.2401 14.96 17.8701 14.92C11.1301 14.16 7.00006 6.95999 9.97006 0.729993Z"
        fill="#475569"
      />
    </svg>
  );
};

export const IconLogo: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="30"
      fill="none"
      viewBox="0 0 110 30"
    >
      <mask
        id="a"
        width="110"
        height="30"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M109.091 0H0v29.934h109.091V0Z"></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill="#F36F21"
          d="M59.101 15.207c0-2.216.023-4.433-.006-6.649-.032-2.595 1.782-4.967 4.2-5.653 1.872-.531 3.588-.15 5.092 1.105a6.063 6.063 0 0 1 2.046 3.297c.152.627.167 1.263.094 1.904a5.818 5.818 0 0 1-1.266 3.012.315.315 0 0 1-.03.038c-.057.054-.054.095.012.143.149.11.29.232.423.361 1.037.998 1.707 2.202 1.925 3.643.33 2.18-.271 4.071-1.786 5.643-.95.987-2.12 1.566-3.466 1.769a5.438 5.438 0 0 1-.81.064c-1.576 0-3.153.002-4.73 0a1.7 1.7 0 0 1-1.644-1.257 2.053 2.053 0 0 1-.056-.54v-6.235l.002-.645Zm3.395 2.277v2.894c-.003.061.02.093.084.09.033-.002.065 0 .098 0h2.633c.163 0 .325-.012.486-.036 1.499-.218 2.892-1.652 2.43-3.7-.229-1.01-1.235-2.201-2.791-2.206-.921-.003-1.843 0-2.764 0-.179 0-.177-.016-.176.18v2.778Zm1.365-6.609c.353-.016.797.02 1.24-.02a2.378 2.378 0 0 0 1.897-3.352c-.434-1.03-1.614-1.654-2.856-1.293-.967.281-1.614 1.152-1.64 2.217-.02.776-.006 1.554-.006 2.33 0 .115.004.117.121.118h1.244Z"
        ></path>
        <path
          fill="#000"
          d="M49.574 24.22c-1.92-.01-3.646-.595-5.124-1.855-1.422-1.211-2.31-2.757-2.642-4.616-.277-1.552-.158-3.074.436-4.541.741-1.829 2.008-3.168 3.724-4.078a8.27 8.27 0 0 1 3.126-.931c1.376-.13 2.674.149 3.898.784 2.03 1.055 3.417 2.686 4.14 4.887.329.996.399 2.023.326 3.068-.19 2.74-2.162 6.03-5.843 7.025a7.586 7.586 0 0 1-2.041.257Zm-.214-12.762a4.689 4.689 0 0 0-.757.097c-3.107.678-4.682 4.173-3.113 7 .938 1.688 2.74 2.662 4.605 2.444 1.093-.128 2.042-.588 2.798-1.4 1.076-1.156 1.584-2.513 1.307-4.124-.312-1.824-1.67-3.35-3.43-3.829a4.843 4.843 0 0 0-1.41-.189Zm54.183-3.692c1.052 0 2.104.023 3.154-.008.943-.027 1.565.883 1.592 1.542.041.987-.843 1.7-1.562 1.692-2.005-.019-4.01-.006-6.014-.007a2.51 2.51 0 0 0-.485.04c-.577.114-.945.472-1.113 1.035a1.717 1.717 0 0 0 .2 1.457c.266.423.651.631 1.135.67.108.008.216.006.325.006h3.754c1.735-.001 3.008.81 3.892 2.295.346.581.556 1.217.642 1.892.022.168.018.34.024.511.039 1.097-.211 2.113-.85 3.007-.699.977-1.654 1.566-2.8 1.848-.406.1-.821.14-1.24.139-2.01-.001-4.02-.013-6.03.005-.891.008-1.446-.684-1.506-1.422-.052-.625.182-1.131.645-1.53.275-.238.599-.341.96-.341 1.935.002 3.869.003 5.803.001.25 0 .498-.018.739-.09.584-.173.955-.621 1.012-1.238.026-.282.019-.56-.053-.837a1.162 1.162 0 0 0-.67-.801 1.94 1.94 0 0 0-.69-.169c-.108-.007-.217-.006-.326-.006-1.278 0-2.557.001-3.836-.002a3.869 3.869 0 0 1-1.699-.378c-1.268-.614-2.083-1.627-2.489-2.98a4.909 4.909 0 0 1 2.891-6.04 4.377 4.377 0 0 1 1.572-.293l3.023.002Zm-9.297 10.741c0 1.196-.015 2.393.005 3.59.017 1.074-.947 1.765-1.787 1.688-.647-.06-1.233-.533-1.382-1.148a1.936 1.936 0 0 1-.046-.459l.001-6.416c.001-.915-.222-1.768-.71-2.537-.785-1.236-1.902-1.971-3.334-2.18-1.347-.198-2.574.124-3.637 1.001a4.568 4.568 0 0 0-1.606 2.629 4.608 4.608 0 0 0-.086.968l.002 6.466c0 .567-.228 1.01-.664 1.349-.725.562-1.825.392-2.357-.361-.184-.261-.254-.556-.254-.872v-6.301a8.326 8.326 0 0 1 1.407-4.684c1.186-1.788 2.82-2.919 4.898-3.346 2.695-.554 5.487.283 7.388 2.258a7.596 7.596 0 0 1 2.022 3.85c.098.493.137.993.138 1.496.002 1.003.003 2.006.002 3.01ZM40.154 10.57c0 1.951-.005 3.903.001 5.854.013 3.64-2.48 6.563-5.84 7.299-.457.1-.919.146-1.386.167-.796.036-1.625-.626-1.628-1.612-.002-.488.146-.907.483-1.257a1.502 1.502 0 0 1 1.117-.487 3.783 3.783 0 0 0 2.202-.688c.887-.619 1.46-1.46 1.681-2.537a4.15 4.15 0 0 0 .073-.855V4.514c0-.182-.006-.366.045-.542.176-.609.538-1.054 1.157-1.202a1.687 1.687 0 0 1 2.077 1.35c.018.11.018.22.018.33v6.12Zm36.518 5.33v6.135c0 .238-.014.473-.09.701-.252.742-.966 1.207-1.767 1.145-.738-.057-1.375-.649-1.51-1.398a1.905 1.905 0 0 1-.028-.345c0-4.162-.001-8.324-.004-12.486-.002-1.156 1.155-2.032 2.29-1.618a1.7 1.7 0 0 1 1.106 1.565c.005.182.003.364.003.546V15.9ZM76.67 4.431c.024.903-.724 1.761-1.686 1.75-.981-.013-1.733-.865-1.71-1.792a1.753 1.753 0 0 1 1.744-1.705c.95.001 1.69.88 1.653 1.747Z"
        ></path>
        <path
          fill="#F36F21"
          d="m24.189 29.934-1.911-2.524-.834-1.1c-.138-.183-.125-.273.055-.412l.195-.149c.097-.077.1-.078.026-.174l-.564-.727-.575-.74c-.108-.14-.108-.14-.248-.045-.955.64-1.99 1.15-3.075 1.516a12.51 12.51 0 0 1-2.9.623c-3.656.327-6.935-.645-9.775-3.02C2.415 21.367 1 19.051.346 16.266a11.887 11.887 0 0 1-.288-1.925c-.007-.107 0-.219-.058-.317V12.9c.063.008.106.05.152.089.251.21.5.423.753.63.07.057.098.118.103.21.13 2.613 1.039 4.908 2.724 6.887 1.792 2.102 4.056 3.389 6.737 3.919.862.17 1.74.238 2.617.202 2.732-.112 5.168-1.028 7.265-2.822 1.88-1.61 3.127-3.634 3.721-6.065.16-.659.252-1.328.291-2.006a11.43 11.43 0 0 0-.433-3.854c-.023-.078-.037-.136.042-.2.39-.315.774-.638 1.161-.959.02-.016.04-.038.079-.031.039.054.056.123.08.189.354.987.594 2.001.69 3.049.316 3.446-.601 6.517-2.715 9.222a12.373 12.373 0 0 1-1.994 2.008c-.103.083-.104.085-.021.19.382.494.765.987 1.149 1.48.081.104.084.104.188.025.057-.042.111-.088.17-.128.123-.084.216-.073.315.04.05.057.095.12.14.181l2.523 3.324c.028.034.053.07.077.107.06.103.049.2-.038.282a1.329 1.329 0 0 1-.114.093l-1.156.884c-.032.025-.08.038-.09.088h-.227Z"
        ></path>
        <path
          fill="#000"
          d="M20.255 0c.05.051.12.042.18.058.63.168 1.145.77 1.11 1.541a1.53 1.53 0 0 1-.383.953 1.487 1.487 0 0 1-.893.485c-.785.119-1.517-.408-1.683-1.211a1.522 1.522 0 0 1 1.07-1.764c.059-.017.128-.01.176-.062h.422Zm-13.1 20.956a22293.827 22293.827 0 0 1 .41-7.607c.035-.621.065-1.243.109-1.864a3.46 3.46 0 0 1 .39-1.42c.406-.752 1.04-1.173 1.864-1.315.076-.013.1.01.104.077l.039.56c.037.605.073 1.21.112 1.814l.162 2.505.13 1.977.163 2.488.162 2.488.03.412a.186.186 0 0 1-.068.172c-.524.452-1.046.908-1.566 1.366-.055.048-.093.052-.154.007-.604-.456-1.21-.91-1.819-1.36a.164.164 0 0 1-.073-.168 1.189 1.189 0 0 0 0-.132h.005Zm11.001-4.831.154-3.005c.065-1.222.13-2.443.197-3.664.05-.941.104-1.882.16-2.822.028-.476.121-.94.323-1.373.385-.83 1.033-1.31 1.918-1.466.121-.021.122-.018.13.106.034.539.066 1.078.101 1.616.05.764.104 1.527.154 2.29.059.89.114 1.781.17 2.671l.13 1.978.165 2.505c.025.38.053.758.083 1.137a.199.199 0 0 1-.076.185c-.52.45-1.039.902-1.555 1.356-.068.06-.112.052-.178.002a334.45 334.45 0 0 0-1.794-1.341c-.062-.046-.11-.09-.082-.175Z"
        ></path>
        <path
          fill="#F36F21"
          d="m15.563 6.219.04.536.13 2.01c.047.725.092 1.45.138 2.176l.13 1.977.13 1.994.13 1.977c.038.55.077 1.098.118 1.647a.213.213 0 0 1-.083.198c-.516.447-1.03.895-1.542 1.346-.075.066-.12.057-.193.003-.592-.447-1.185-.891-1.78-1.333-.068-.05-.098-.1-.092-.19.033-.49.058-.98.084-1.468l.159-2.97.069-1.305.158-2.87c.02-.38.029-.76.073-1.138.052-.435.158-.856.365-1.243.421-.788 1.087-1.211 1.966-1.347Z"
        ></path>
        <path
          fill="#000"
          d="M10.538 6.495a1.497 1.497 0 0 1-1.5 1.514 1.483 1.483 0 0 1-1.052-.445 1.535 1.535 0 0 1-.438-1.07c-.002-.836.676-1.527 1.498-1.527.826 0 1.494.683 1.492 1.528Z"
        ></path>
        <path
          fill="#F36F21"
          d="M13.098 3.978a1.542 1.542 0 0 1 .436-1.078 1.494 1.494 0 0 1 1.06-.447c.814 0 1.49.685 1.495 1.514a1.544 1.544 0 0 1-.434 1.08 1.494 1.494 0 0 1-1.058.448 1.496 1.496 0 0 1-1.5-1.517Z"
        ></path>
      </g>
    </svg>
  );
};

export const IconSmartHome: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
      <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
    </svg>
  );
};

export const IconShoppingCart: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
    </svg>
  );
};

export const IconStar: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </svg>
  );
};

export const IconCirclePlus: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </svg>
  );
};

export const IconBox: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
      <path d="M12 12l8 -4.5" />
      <path d="M12 12l0 9" />
      <path d="M12 12l-8 -4.5" />
    </svg>
  );
};

export const IconIndentIncrease: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 6l-7 0" />
      <path d="M20 12l-9 0" />
      <path d="M20 18l-7 0" />
      <path d="M8 8l-4 4l4 4" />
    </svg>
  );
};
