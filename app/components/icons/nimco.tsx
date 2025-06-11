import { FC, SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size: number;
}

export const OrderlyIcon: FC<IconProps> = (props) => {
  const { size = 14, ...rest } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g transform="translate(24, 0) scale(-1, 1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 3V21H9L15 9.5V21H18V3H15L9 14.5V3H6Z"
          fill="white"
          fillOpacity="0.98"
        />
      </g>
    </svg>
  );
};

export const OrderlyActiveIcon: FC<IconProps> = (props) => {
  const { size = 14, ...rest } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g transform="translate(24, 0) scale(-1, 1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 3V21H9L15 9.5V21H18V3H15L9 14.5V3H6Z"
          fill="coral"
          fillOpacity="0.98"
        />
      </g>
    </svg>
  );
};
