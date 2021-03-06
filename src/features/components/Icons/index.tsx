import React from "react";
import {
  VscSignIn,
  VscSettingsGear,
  VscGithubInverted,
  VscAdd,
  VscSearch,
  VscClose,
} from "react-icons/vsc";

import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { MdThumbUp } from "react-icons/md";
import { BiLike } from "react-icons/bi";

import { IoChevronForwardOutline, IoAdd } from "react-icons/io5";

interface IconsProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const Logo: React.FC<IconsProps> = ({
  className,
  width = "243",
  height = "31",
}) => (
  <svg
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 243 31"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_61687:3250)">
      <path
        d="M222 0C222.463 5.56494e-05 222.909 0.154934 223.255 0.435259C223.601 0.715583 223.822 1.10186 223.876 1.52082L223.889 1.72233V29.2796C223.888 29.7186 223.704 30.1408 223.374 30.46C223.043 30.7792 222.591 30.9713 222.111 30.997C221.63 31.0228 221.157 30.8802 220.788 30.5984C220.418 30.3167 220.181 29.917 220.124 29.4811L220.111 29.2796V1.72233C220.111 1.26554 220.31 0.827457 220.664 0.504458C221.019 0.181459 221.499 0 222 0V0ZM214.444 5.16698C214.907 5.16704 215.354 5.32192 215.699 5.60224C216.045 5.88257 216.266 6.26884 216.32 6.6878L216.333 6.88931V24.1126C216.333 24.5516 216.148 24.9738 215.818 25.293C215.487 25.6122 215.036 25.8043 214.555 25.8301C214.075 25.8558 213.601 25.7132 213.232 25.4314C212.863 25.1497 212.626 24.75 212.569 24.3141L212.556 24.1126V6.88931C212.556 6.43252 212.755 5.99444 213.109 5.67144C213.463 5.34844 213.943 5.16698 214.444 5.16698V5.16698ZM229.556 5.16698C230.018 5.16704 230.465 5.32192 230.81 5.60224C231.156 5.88257 231.377 6.26884 231.431 6.6878L231.444 6.88931V24.1126C231.444 24.5516 231.26 24.9738 230.929 25.293C230.599 25.6122 230.147 25.8043 229.666 25.8301C229.186 25.8558 228.712 25.7132 228.343 25.4314C227.974 25.1497 227.737 24.75 227.68 24.3141L227.667 24.1126V6.88931C227.667 6.43252 227.866 5.99444 228.22 5.67144C228.574 5.34844 229.055 5.16698 229.556 5.16698V5.16698ZM206.889 10.334C207.352 10.334 207.798 10.4889 208.144 10.7692C208.49 11.0496 208.71 11.4358 208.765 11.8548L208.778 12.0563V18.9456C208.777 19.3846 208.593 19.8068 208.262 20.126C207.932 20.4453 207.48 20.6373 207 20.6631C206.519 20.6888 206.046 20.5462 205.677 20.2645C205.307 19.9827 205.07 19.583 205.013 19.1471L205 18.9456V12.0563C205 11.5995 205.199 11.1614 205.553 10.8384C205.907 10.5154 206.388 10.334 206.889 10.334V10.334ZM237.111 10.334C237.574 10.334 238.02 10.4889 238.366 10.7692C238.712 11.0496 238.933 11.4358 238.987 11.8548L239 12.0563V18.9456C238.999 19.3846 238.815 19.8068 238.485 20.126C238.154 20.4453 237.702 20.6373 237.222 20.6631C236.741 20.6888 236.268 20.5462 235.899 20.2645C235.53 19.9827 235.292 19.583 235.235 19.1471L235.222 18.9456V12.0563C235.222 11.5995 235.421 11.1614 235.775 10.8384C236.13 10.5154 236.61 10.334 237.111 10.334Z"
        fill="url(#paint0_linear_61687:3250)"
      />
      <path
        d="M15.732 20.608C15.78 20.752 15.804 20.92 15.804 21.112C15.828 21.304 15.84 21.484 15.84 21.652C15.84 22.084 15.792 22.492 15.696 22.876C15.6 23.26 15.444 23.596 15.228 23.884C15.012 24.172 14.724 24.412 14.364 24.604C14.028 24.772 13.596 24.856 13.068 24.856C12.564 24.856 12.06 24.748 11.556 24.532C11.076 24.316 10.476 24.004 9.756 23.596L2.016 19.132C1.392 18.316 1.08 17.236 1.08 15.892C1.08 14.884 1.224 14.104 1.512 13.552C1.8 13 2.22 12.568 2.772 12.256L12.672 6.496C13.848 6.808 14.64 7.24 15.048 7.792C15.48 8.32 15.696 8.896 15.696 9.52C15.696 10.36 15.48 11.02 15.048 11.5C14.64 11.956 14.028 12.388 13.212 12.796L6.876 16L15.732 20.608ZM18.0613 16.252C18.0613 14.668 18.3013 13.3 18.7813 12.148C19.2613 10.972 19.9213 10 20.7613 9.232C21.6253 8.464 22.6213 7.9 23.7493 7.54C24.9013 7.156 26.1373 6.964 27.4573 6.964C27.9373 6.964 28.4053 7.012 28.8613 7.108C29.3173 7.18 29.6893 7.276 29.9773 7.396V1.564C30.2173 1.492 30.6013 1.42 31.1293 1.348C31.6573 1.252 32.1973 1.204 32.7493 1.204C33.2773 1.204 33.7453 1.24 34.1533 1.312C34.5853 1.384 34.9453 1.528 35.2333 1.744C35.5213 1.96 35.7373 2.26 35.8813 2.644C36.0253 3.004 36.0973 3.484 36.0973 4.084V21.148C36.0973 22.276 35.5693 23.176 34.5133 23.848C33.8173 24.304 32.9173 24.7 31.8133 25.036C30.7093 25.396 29.4373 25.576 27.9973 25.576C26.4373 25.576 25.0333 25.36 23.7853 24.928C22.5613 24.496 21.5173 23.872 20.6533 23.056C19.8133 22.24 19.1653 21.268 18.7093 20.14C18.2773 18.988 18.0613 17.692 18.0613 16.252ZM28.2853 11.752C26.9893 11.752 25.9933 12.124 25.2973 12.868C24.6013 13.612 24.2533 14.74 24.2533 16.252C24.2533 17.74 24.5773 18.868 25.2253 19.636C25.8733 20.38 26.8093 20.752 28.0333 20.752C28.4653 20.752 28.8493 20.692 29.1853 20.572C29.5453 20.428 29.8213 20.272 30.0133 20.104V12.184C29.5333 11.896 28.9573 11.752 28.2853 11.752ZM49.1631 25.576C47.7471 25.576 46.4271 25.384 45.2031 25C44.0031 24.592 42.9471 23.992 42.0351 23.2C41.1471 22.408 40.4391 21.412 39.9111 20.212C39.4071 19.012 39.1551 17.608 39.1551 16C39.1551 14.416 39.4071 13.06 39.9111 11.932C40.4391 10.78 41.1231 9.844 41.9631 9.124C42.8031 8.38 43.7631 7.84 44.8431 7.504C45.9231 7.144 47.0271 6.964 48.1551 6.964C49.4271 6.964 50.5791 7.156 51.6111 7.54C52.6671 7.924 53.5671 8.452 54.3111 9.124C55.0791 9.796 55.6671 10.6 56.0751 11.536C56.5071 12.472 56.7231 13.492 56.7231 14.596C56.7231 15.412 56.4951 16.036 56.0391 16.468C55.5831 16.9 54.9471 17.176 54.1311 17.296L45.2391 18.628C45.5031 19.42 46.0431 20.02 46.8591 20.428C47.6751 20.812 48.6111 21.004 49.6671 21.004C50.6511 21.004 51.5751 20.884 52.4391 20.644C53.3271 20.38 54.0471 20.08 54.5991 19.744C54.9831 19.984 55.3071 20.32 55.5711 20.752C55.8351 21.184 55.9671 21.64 55.9671 22.12C55.9671 23.2 55.4631 24.004 54.4551 24.532C53.6871 24.94 52.8231 25.216 51.8631 25.36C50.9031 25.504 50.0031 25.576 49.1631 25.576ZM48.1551 11.428C47.5791 11.428 47.0751 11.524 46.6431 11.716C46.2351 11.908 45.8991 12.16 45.6351 12.472C45.3711 12.76 45.1671 13.096 45.0231 13.48C44.9031 13.84 44.8311 14.212 44.8071 14.596L50.9631 13.588C50.8911 13.108 50.6271 12.628 50.1711 12.148C49.7151 11.668 49.0431 11.428 48.1551 11.428ZM71.2283 24.532C70.8923 24.796 70.4003 25.012 69.7523 25.18C69.1043 25.348 68.3723 25.432 67.5563 25.432C66.6203 25.432 65.8043 25.312 65.1083 25.072C64.4363 24.832 63.9683 24.448 63.7043 23.92C63.4883 23.512 63.2243 22.948 62.9123 22.228C62.6243 21.484 62.3123 20.668 61.9763 19.78C61.6403 18.868 61.2923 17.896 60.9323 16.864C60.5723 15.832 60.2243 14.812 59.8883 13.804C59.5763 12.796 59.2883 11.824 59.0243 10.888C58.7603 9.952 58.5443 9.124 58.3763 8.404C58.7123 8.068 59.1563 7.78 59.7083 7.54C60.2843 7.276 60.9083 7.144 61.5803 7.144C62.4203 7.144 63.1043 7.324 63.6323 7.684C64.1843 8.02 64.5923 8.668 64.8563 9.628L66.2603 15.136C66.5243 16.216 66.7763 17.2 67.0163 18.088C67.2563 18.952 67.4363 19.624 67.5563 20.104H67.7363C68.1923 18.328 68.6723 16.36 69.1763 14.2C69.6803 12.04 70.1363 9.916 70.5443 7.828C70.9523 7.612 71.4083 7.444 71.9123 7.324C72.4403 7.204 72.9443 7.144 73.4243 7.144C74.2643 7.144 74.9723 7.324 75.5483 7.684C76.1243 8.044 76.4123 8.668 76.4123 9.556C76.4123 9.94 76.3163 10.504 76.1243 11.248C75.9563 11.968 75.7283 12.796 75.4403 13.732C75.1763 14.644 74.8523 15.616 74.4683 16.648C74.1083 17.68 73.7363 18.688 73.3523 19.672C72.9683 20.656 72.5843 21.58 72.2003 22.444C71.8403 23.284 71.5163 23.98 71.2283 24.532ZM81.4354 28.816C81.0994 28.864 80.7754 28.888 80.4634 28.888C80.1514 28.912 79.8634 28.924 79.5994 28.924C78.5914 28.924 77.8114 28.708 77.2594 28.276C76.7314 27.844 76.4674 27.148 76.4674 26.188C76.4674 25.54 76.5634 24.892 76.7554 24.244C76.9474 23.572 77.1154 22.984 77.2594 22.48L83.5954 -0.380002C83.9554 -0.428001 84.2914 -0.452001 84.6034 -0.452001C84.9154 -0.476 85.2034 -0.488 85.4674 -0.488C86.4274 -0.488 87.1834 -0.284001 87.7354 0.123998C88.3114 0.531999 88.5994 1.192 88.5994 2.104C88.5994 2.8 88.5034 3.46 88.3114 4.084C88.1194 4.708 87.9394 5.332 87.7714 5.956L81.4354 28.816ZM89.9232 10.744C89.8752 10.6 89.8392 10.432 89.8152 10.24C89.8152 10.048 89.8152 9.868 89.8152 9.7C89.8152 9.268 89.8632 8.86 89.9592 8.476C90.0552 8.092 90.2112 7.756 90.4272 7.468C90.6432 7.18 90.9192 6.952 91.2552 6.784C91.6152 6.592 92.0592 6.496 92.5872 6.496C93.0912 6.496 93.5832 6.604 94.0632 6.82C94.5672 7.036 95.1792 7.348 95.8992 7.756L103.639 12.22C104.263 13.036 104.575 14.116 104.575 15.46C104.575 16.468 104.431 17.248 104.143 17.8C103.855 18.352 103.435 18.784 102.883 19.096L92.9832 24.856C91.8072 24.544 91.0032 24.124 90.5712 23.596C90.1632 23.044 89.9592 22.456 89.9592 21.832C89.9592 20.992 90.1632 20.344 90.5712 19.888C91.0032 19.408 91.6272 18.964 92.4432 18.556L98.7792 15.352L89.9232 10.744ZM114.796 1.564C115.036 1.492 115.42 1.42 115.948 1.348C116.476 1.252 117.016 1.204 117.568 1.204C118.096 1.204 118.564 1.24 118.972 1.312C119.404 1.384 119.764 1.528 120.052 1.744C120.34 1.96 120.556 2.26 120.7 2.644C120.844 3.004 120.916 3.484 120.916 4.084V7.612C121.516 7.372 122.08 7.204 122.608 7.108C123.16 7.012 123.76 6.964 124.408 6.964C125.56 6.964 126.652 7.168 127.684 7.576C128.716 7.984 129.628 8.584 130.42 9.376C131.212 10.144 131.836 11.104 132.292 12.256C132.748 13.408 132.976 14.74 132.976 16.252C132.976 17.812 132.736 19.18 132.256 20.356C131.8 21.508 131.152 22.468 130.312 23.236C129.472 24.004 128.44 24.592 127.216 25C126.016 25.384 124.684 25.576 123.22 25.576C121.636 25.576 120.292 25.384 119.188 25C118.084 24.64 117.148 24.184 116.38 23.632C115.324 22.888 114.796 21.928 114.796 20.752V1.564ZM123.22 20.752C124.324 20.752 125.176 20.38 125.776 19.636C126.4 18.868 126.712 17.74 126.712 16.252C126.712 14.74 126.4 13.612 125.776 12.868C125.152 12.124 124.312 11.752 123.256 11.752C122.776 11.752 122.356 11.8 121.996 11.896C121.66 11.992 121.288 12.136 120.88 12.328V20.176C121.144 20.344 121.456 20.488 121.816 20.608C122.2 20.704 122.668 20.752 123.22 20.752ZM142.186 24.964C141.922 25.012 141.526 25.072 140.998 25.144C140.494 25.24 139.978 25.288 139.45 25.288C138.922 25.288 138.442 25.252 138.01 25.18C137.602 25.108 137.254 24.964 136.966 24.748C136.678 24.532 136.45 24.244 136.282 23.884C136.138 23.5 136.066 23.008 136.066 22.408V1.528C136.33 1.48 136.714 1.42 137.218 1.348C137.746 1.252 138.274 1.204 138.802 1.204C139.33 1.204 139.798 1.24 140.206 1.312C140.638 1.384 140.998 1.528 141.286 1.744C141.574 1.96 141.79 2.26 141.934 2.644C142.102 3.004 142.186 3.484 142.186 4.084V24.964ZM164.156 16.252C164.156 17.74 163.928 19.072 163.472 20.248C163.016 21.4 162.368 22.372 161.528 23.164C160.712 23.956 159.728 24.556 158.576 24.964C157.424 25.372 156.14 25.576 154.724 25.576C153.308 25.576 152.024 25.36 150.872 24.928C149.72 24.496 148.724 23.884 147.884 23.092C147.068 22.276 146.432 21.292 145.976 20.14C145.52 18.988 145.292 17.692 145.292 16.252C145.292 14.836 145.52 13.552 145.976 12.4C146.432 11.248 147.068 10.276 147.884 9.484C148.724 8.668 149.72 8.044 150.872 7.612C152.024 7.18 153.308 6.964 154.724 6.964C156.14 6.964 157.424 7.192 158.576 7.648C159.728 8.08 160.712 8.704 161.528 9.52C162.368 10.312 163.016 11.284 163.472 12.436C163.928 13.588 164.156 14.86 164.156 16.252ZM151.556 16.252C151.556 17.716 151.832 18.844 152.384 19.636C152.96 20.404 153.752 20.788 154.76 20.788C155.768 20.788 156.536 20.392 157.064 19.6C157.616 18.808 157.892 17.692 157.892 16.252C157.892 14.812 157.616 13.708 157.064 12.94C156.512 12.148 155.732 11.752 154.724 11.752C153.716 11.752 152.936 12.148 152.384 12.94C151.832 13.708 151.556 14.812 151.556 16.252ZM175.674 6.964C177.042 6.964 178.278 7.144 179.382 7.504C180.51 7.84 181.458 8.284 182.226 8.836C182.706 9.172 183.078 9.544 183.342 9.952C183.63 10.36 183.774 10.888 183.774 11.536V24.136C183.774 25.408 183.534 26.5 183.054 27.412C182.574 28.348 181.914 29.116 181.074 29.716C180.258 30.34 179.286 30.796 178.158 31.084C177.054 31.372 175.866 31.516 174.594 31.516C172.41 31.516 170.694 31.216 169.446 30.616C168.198 30.04 167.574 29.092 167.574 27.772C167.574 27.22 167.682 26.728 167.898 26.296C168.138 25.888 168.402 25.576 168.69 25.36C169.386 25.744 170.166 26.068 171.03 26.332C171.918 26.596 172.83 26.728 173.766 26.728C175.062 26.728 176.094 26.512 176.862 26.08C177.63 25.648 178.014 24.952 178.014 23.992V23.416C177.03 23.848 175.83 24.064 174.414 24.064C173.334 24.064 172.302 23.908 171.318 23.596C170.358 23.26 169.506 22.756 168.762 22.084C168.042 21.388 167.454 20.5 166.998 19.42C166.566 18.34 166.35 17.056 166.35 15.568C166.35 14.104 166.578 12.832 167.034 11.752C167.514 10.672 168.162 9.784 168.978 9.088C169.818 8.368 170.802 7.84 171.93 7.504C173.082 7.144 174.33 6.964 175.674 6.964ZM177.906 12.184C177.738 12.088 177.486 11.992 177.15 11.896C176.838 11.8 176.442 11.752 175.962 11.752C174.786 11.752 173.898 12.088 173.298 12.76C172.722 13.408 172.434 14.344 172.434 15.568C172.434 16.96 172.722 17.968 173.298 18.592C173.898 19.192 174.654 19.492 175.566 19.492C176.55 19.492 177.33 19.264 177.906 18.808V12.184Z"
        fill="url(#paint1_linear_61687:3250)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_61687:3250"
        x1="205"
        y1="0.735334"
        x2="244.382"
        y2="11.7419"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_61687:3250"
        x1="-3.82613e-06"
        y1="0.735334"
        x2="69.4423"
        y2="107.478"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <clipPath id="clip0_61687:3250">
        <rect width="243" height="31" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Background: React.FC<IconsProps> = ({
  className,
  width = "386",
  height = "820",
}) => (
  <svg
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 386 820"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="976" height="820" fill="url(#paint0_linear_61340:2780)" />
    <mask
      id="mask0_61340:2780"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="976"
      height="820"
    >
      <rect width="976" height="820" fill="url(#paint1_linear_61340:2780)" />
    </mask>
    <g mask="url(#mask0_61340:2780)">
      <g style={{ mixBlendMode: "luminosity" }} opacity="0.4">
        <path
          d="M0.000205994 304.761V374.986L60.9764 410.102L121.953 374.986V304.761L60.9764 269.646L0.000205994 304.761Z"
          fill="url(#paint2_linear_61340:2780)"
        />
        <path
          d="M0.000205994 234.533V304.758L60.9764 339.874L121.953 304.758V234.533L60.9764 199.417L0.000205994 234.533Z"
          fill="url(#paint3_linear_61340:2780)"
        />
        <path
          d="M182.929 199.435V269.66L121.953 304.776L60.9763 269.66V199.435L121.953 164.32L182.929 199.435Z"
          fill="url(#paint4_linear_61340:2780)"
        />
        <path
          d="M121.953 374.986V304.761L182.929 269.646L243.905 304.761V374.986L182.929 410.102L121.953 374.986Z"
          fill="url(#paint5_linear_61340:2780)"
        />
        <path
          d="M243.905 234.533V304.758L182.929 339.874L121.953 304.758V234.533L182.929 199.417L243.905 234.533Z"
          fill="url(#paint6_linear_61340:2780)"
        />
        <path
          d="M182.929 410.117V339.892L121.953 304.776L60.9763 339.892L60.9763 410.117L121.953 445.233L182.929 410.117Z"
          fill="url(#paint7_linear_61340:2780)"
        />
      </g>
      <g style={{ mixBlendMode: "luminosity" }} opacity="0.4">
        <path
          d="M244 304.761V374.986L304.976 410.102L365.953 374.986V304.761L304.976 269.646L244 304.761Z"
          fill="url(#paint8_linear_61340:2780)"
        />
        <path
          d="M244 234.533V304.758L304.976 339.874L365.953 304.758V234.533L304.976 199.417L244 234.533Z"
          fill="url(#paint9_linear_61340:2780)"
        />
        <path
          d="M426.929 199.435V269.66L365.952 304.776L304.976 269.66V199.435L365.952 164.32L426.929 199.435Z"
          fill="url(#paint10_linear_61340:2780)"
        />
        <path
          d="M365.953 374.986V304.761L426.929 269.646L487.905 304.761V374.986L426.929 410.102L365.953 374.986Z"
          fill="url(#paint11_linear_61340:2780)"
        />
        <path
          d="M487.905 234.533V304.758L426.929 339.874L365.953 304.758V234.533L426.929 199.417L487.905 234.533Z"
          fill="url(#paint12_linear_61340:2780)"
        />
        <path
          d="M426.929 410.117V339.892L365.952 304.776L304.976 339.892V410.117L365.952 445.233L426.929 410.117Z"
          fill="url(#paint13_linear_61340:2780)"
        />
      </g>
      <g style={{ mixBlendMode: "luminosity" }} opacity="0.4">
        <path
          d="M0.000205994 515.206V585.431L60.9764 620.547L121.953 585.431V515.206L60.9764 480.09L0.000205994 515.206Z"
          fill="url(#paint14_linear_61340:2780)"
        />
        <path
          d="M0.000205994 444.978V515.203L60.9764 550.318L121.953 515.203V444.978L60.9764 409.862L0.000205994 444.978Z"
          fill="url(#paint15_linear_61340:2780)"
        />
        <path
          d="M182.929 409.88V480.105L121.953 515.221L60.9763 480.105V409.88L121.953 374.764L182.929 409.88Z"
          fill="url(#paint16_linear_61340:2780)"
        />
        <path
          d="M121.953 585.431V515.206L182.929 480.09L243.905 515.206V585.431L182.929 620.547L121.953 585.431Z"
          fill="url(#paint17_linear_61340:2780)"
        />
        <path
          d="M243.905 444.978V515.203L182.929 550.318L121.953 515.203V444.978L182.929 409.862L243.905 444.978Z"
          fill="url(#paint18_linear_61340:2780)"
        />
        <path
          d="M182.929 620.562V550.337L121.953 515.221L60.9763 550.337L60.9763 620.562L121.953 655.677L182.929 620.562Z"
          fill="url(#paint19_linear_61340:2780)"
        />
      </g>
      <g style={{ mixBlendMode: "luminosity" }} opacity="0.4">
        <path
          d="M244 515.206V585.431L304.976 620.547L365.953 585.431V515.206L304.976 480.09L244 515.206Z"
          fill="url(#paint20_linear_61340:2780)"
        />
        <path
          d="M244 444.978V515.203L304.976 550.318L365.953 515.203V444.978L304.976 409.862L244 444.978Z"
          fill="url(#paint21_linear_61340:2780)"
        />
        <path
          d="M426.929 409.88V480.105L365.952 515.221L304.976 480.105V409.88L365.952 374.764L426.929 409.88Z"
          fill="url(#paint22_linear_61340:2780)"
        />
        <path
          d="M365.953 585.431V515.206L426.929 480.09L487.905 515.206V585.431L426.929 620.547L365.953 585.431Z"
          fill="url(#paint23_linear_61340:2780)"
        />
        <path
          d="M487.905 444.978V515.203L426.929 550.318L365.953 515.203V444.978L426.929 409.862L487.905 444.978Z"
          fill="url(#paint24_linear_61340:2780)"
        />
        <path
          d="M426.929 620.562V550.337L365.952 515.221L304.976 550.337V620.562L365.952 655.678L426.929 620.562Z"
          fill="url(#paint25_linear_61340:2780)"
        />
      </g>
      <g style={{ mixBlendMode: "luminosity" }} opacity="0.4">
        <path
          d="M0.000205994 725.651V795.875L60.9764 830.991L121.953 795.875V725.651L60.9764 690.535L0.000205994 725.651Z"
          fill="url(#paint26_linear_61340:2780)"
        />
        <path
          d="M0.000205994 655.422V725.647L60.9764 760.763L121.953 725.647V655.422L60.9764 620.306L0.000205994 655.422Z"
          fill="url(#paint27_linear_61340:2780)"
        />
        <path
          d="M182.929 620.325V690.55L121.953 725.665L60.9763 690.55V620.325L121.953 585.209L182.929 620.325Z"
          fill="url(#paint28_linear_61340:2780)"
        />
        <path
          d="M121.953 795.875V725.651L182.929 690.535L243.905 725.651V795.875L182.929 830.991L121.953 795.875Z"
          fill="url(#paint29_linear_61340:2780)"
        />
        <path
          d="M243.905 655.422V725.647L182.929 760.763L121.953 725.647V655.422L182.929 620.306L243.905 655.422Z"
          fill="url(#paint30_linear_61340:2780)"
        />
        <path
          d="M182.929 831.006V760.781L121.953 725.665L60.9763 760.781L60.9763 831.006L121.953 866.122L182.929 831.006Z"
          fill="url(#paint31_linear_61340:2780)"
        />
      </g>
      <g style={{ mixBlendMode: "luminosity" }} opacity="0.4">
        <path
          d="M244 725.651V795.876L304.976 830.991L365.953 795.876V725.651L304.976 690.535L244 725.651Z"
          fill="url(#paint32_linear_61340:2780)"
        />
        <path
          d="M244 655.422V725.647L304.976 760.763L365.953 725.647V655.422L304.976 620.306L244 655.422Z"
          fill="url(#paint33_linear_61340:2780)"
        />
        <path
          d="M426.929 620.325V690.55L365.952 725.666L304.976 690.55V620.325L365.952 585.209L426.929 620.325Z"
          fill="url(#paint34_linear_61340:2780)"
        />
        <path
          d="M365.953 795.875V725.651L426.929 690.535L487.905 725.651V795.875L426.929 830.991L365.953 795.875Z"
          fill="url(#paint35_linear_61340:2780)"
        />
        <path
          d="M487.905 655.422V725.647L426.929 760.763L365.953 725.647V655.422L426.929 620.306L487.905 655.422Z"
          fill="url(#paint36_linear_61340:2780)"
        />
        <path
          d="M426.929 831.006V760.781L365.952 725.666L304.976 760.781V831.006L365.952 866.122L426.929 831.006Z"
          fill="url(#paint37_linear_61340:2780)"
        />
      </g>
      <g style={{ mixBlendMode: "luminosity" }} opacity="0.4">
        <path
          d="M0.000205994 94.3169V164.542L60.9764 199.658L121.953 164.542V94.3169L60.9764 59.2011L0.000205994 94.3169Z"
          fill="url(#paint38_linear_61340:2780)"
        />
        <path
          d="M0.000205994 24.0885V94.3135L60.9764 129.429L121.953 94.3135V24.0885L60.9764 -11.0273L0.000205994 24.0885Z"
          fill="url(#paint39_linear_61340:2780)"
        />
        <path
          d="M182.929 -11.0091V59.2158L121.953 94.3317L60.9763 59.2158V-11.0091L121.953 -46.125L182.929 -11.0091Z"
          fill="url(#paint40_linear_61340:2780)"
        />
        <path
          d="M121.953 164.542V94.3168L182.929 59.2009L243.905 94.3168V164.542L182.929 199.658L121.953 164.542Z"
          fill="url(#paint41_linear_61340:2780)"
        />
        <path
          d="M243.905 24.0885V94.3135L182.929 129.429L121.953 94.3135V24.0885L182.929 -11.0273L243.905 24.0885Z"
          fill="url(#paint42_linear_61340:2780)"
        />
        <path
          d="M182.929 199.672V129.448L121.953 94.3317L60.9763 129.448L60.9763 199.672L121.953 234.788L182.929 199.672Z"
          fill="url(#paint43_linear_61340:2780)"
        />
      </g>
      <g style={{ mixBlendMode: "luminosity" }} opacity="0.4">
        <path
          d="M244 94.3169V164.542L304.976 199.658L365.953 164.542V94.3169L304.976 59.2011L244 94.3169Z"
          fill="url(#paint44_linear_61340:2780)"
        />
        <path
          d="M244 24.0885V94.3135L304.976 129.429L365.953 94.3135V24.0885L304.976 -11.0273L244 24.0885Z"
          fill="url(#paint45_linear_61340:2780)"
        />
        <path
          d="M426.929 -11.0091V59.2158L365.952 94.3317L304.976 59.2158V-11.0091L365.952 -46.125L426.929 -11.0091Z"
          fill="url(#paint46_linear_61340:2780)"
        />
        <path
          d="M365.953 164.542V94.3168L426.929 59.2009L487.905 94.3168V164.542L426.929 199.658L365.953 164.542Z"
          fill="url(#paint47_linear_61340:2780)"
        />
        <path
          d="M487.905 24.0885V94.3135L426.929 129.429L365.953 94.3135V24.0885L426.929 -11.0273L487.905 24.0885Z"
          fill="url(#paint48_linear_61340:2780)"
        />
        <path
          d="M426.929 199.672V129.448L365.952 94.3317L304.976 129.448V199.672L365.952 234.788L426.929 199.672Z"
          fill="url(#paint49_linear_61340:2780)"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_61340:2780"
        x1="305"
        y1="0"
        x2="305"
        y2="820"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_61340:2780"
        x1="305"
        y1="0"
        x2="305"
        y2="820"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_61340:2780"
        x1="60.9764"
        y1="406.873"
        x2="0.231895"
        y2="303.246"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_61340:2780"
        x1="60.9764"
        y1="336.644"
        x2="0.231885"
        y2="233.017"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_61340:2780"
        x1="60.9763"
        y1="195.489"
        x2="182.763"
        y2="268.955"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_61340:2780"
        x1="243.905"
        y1="378.933"
        x2="122.119"
        y2="305.467"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_61340:2780"
        x1="182.929"
        y1="336.644"
        x2="243.673"
        y2="233.017"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_61340:2780"
        x1="121.953"
        y1="308.006"
        x2="182.697"
        y2="411.633"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_61340:2780"
        x1="304.976"
        y1="406.872"
        x2="244.232"
        y2="303.246"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_61340:2780"
        x1="304.976"
        y1="336.644"
        x2="244.232"
        y2="233.017"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_61340:2780"
        x1="304.976"
        y1="195.489"
        x2="426.762"
        y2="268.955"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_61340:2780"
        x1="487.905"
        y1="378.933"
        x2="366.119"
        y2="305.467"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_61340:2780"
        x1="426.929"
        y1="336.644"
        x2="487.673"
        y2="233.017"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_61340:2780"
        x1="365.952"
        y1="308.006"
        x2="426.697"
        y2="411.633"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_61340:2780"
        x1="60.9764"
        y1="617.317"
        x2="0.231895"
        y2="513.69"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_61340:2780"
        x1="60.9764"
        y1="547.089"
        x2="0.231885"
        y2="443.462"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint16_linear_61340:2780"
        x1="60.9763"
        y1="405.933"
        x2="182.763"
        y2="479.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint17_linear_61340:2780"
        x1="243.905"
        y1="589.378"
        x2="122.119"
        y2="515.911"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint18_linear_61340:2780"
        x1="182.929"
        y1="547.089"
        x2="243.673"
        y2="443.462"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint19_linear_61340:2780"
        x1="121.953"
        y1="518.451"
        x2="182.697"
        y2="622.077"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint20_linear_61340:2780"
        x1="304.976"
        y1="617.317"
        x2="244.232"
        y2="513.69"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint21_linear_61340:2780"
        x1="304.976"
        y1="547.089"
        x2="244.232"
        y2="443.462"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint22_linear_61340:2780"
        x1="304.976"
        y1="405.933"
        x2="426.762"
        y2="479.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint23_linear_61340:2780"
        x1="487.905"
        y1="589.378"
        x2="366.119"
        y2="515.911"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint24_linear_61340:2780"
        x1="426.929"
        y1="547.089"
        x2="487.673"
        y2="443.462"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint25_linear_61340:2780"
        x1="365.952"
        y1="518.451"
        x2="426.697"
        y2="622.078"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint26_linear_61340:2780"
        x1="60.9764"
        y1="827.762"
        x2="0.231895"
        y2="724.135"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint27_linear_61340:2780"
        x1="60.9764"
        y1="757.533"
        x2="0.231885"
        y2="653.906"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint28_linear_61340:2780"
        x1="60.9763"
        y1="616.378"
        x2="182.763"
        y2="689.844"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint29_linear_61340:2780"
        x1="243.905"
        y1="799.822"
        x2="122.119"
        y2="726.356"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint30_linear_61340:2780"
        x1="182.929"
        y1="757.533"
        x2="243.673"
        y2="653.906"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint31_linear_61340:2780"
        x1="121.953"
        y1="728.895"
        x2="182.697"
        y2="832.522"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint32_linear_61340:2780"
        x1="304.976"
        y1="827.762"
        x2="244.232"
        y2="724.135"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint33_linear_61340:2780"
        x1="304.976"
        y1="757.533"
        x2="244.232"
        y2="653.906"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint34_linear_61340:2780"
        x1="304.976"
        y1="616.378"
        x2="426.762"
        y2="689.844"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint35_linear_61340:2780"
        x1="487.905"
        y1="799.822"
        x2="366.119"
        y2="726.356"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint36_linear_61340:2780"
        x1="426.929"
        y1="757.533"
        x2="487.673"
        y2="653.906"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint37_linear_61340:2780"
        x1="365.952"
        y1="728.895"
        x2="426.697"
        y2="832.522"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint38_linear_61340:2780"
        x1="60.9764"
        y1="196.428"
        x2="0.231895"
        y2="92.8011"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint39_linear_61340:2780"
        x1="60.9764"
        y1="126.2"
        x2="0.231885"
        y2="22.5727"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint40_linear_61340:2780"
        x1="60.9763"
        y1="-14.9558"
        x2="182.763"
        y2="58.5105"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint41_linear_61340:2780"
        x1="243.905"
        y1="168.488"
        x2="122.119"
        y2="95.0221"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint42_linear_61340:2780"
        x1="182.929"
        y1="126.2"
        x2="243.673"
        y2="22.5727"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint43_linear_61340:2780"
        x1="121.953"
        y1="97.5614"
        x2="182.697"
        y2="201.188"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint44_linear_61340:2780"
        x1="304.976"
        y1="196.428"
        x2="244.232"
        y2="92.8011"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint45_linear_61340:2780"
        x1="304.976"
        y1="126.2"
        x2="244.232"
        y2="22.5727"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint46_linear_61340:2780"
        x1="304.976"
        y1="-14.9558"
        x2="426.762"
        y2="58.5105"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint47_linear_61340:2780"
        x1="487.905"
        y1="168.488"
        x2="366.119"
        y2="95.0221"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF008E" stopOpacity="0" />
        <stop offset="1" stopColor="#FFCD1E" />
      </linearGradient>
      <linearGradient
        id="paint48_linear_61340:2780"
        x1="426.929"
        y1="126.2"
        x2="487.673"
        y2="22.5727"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint49_linear_61340:2780"
        x1="365.952"
        y1="97.5614"
        x2="426.697"
        y2="201.188"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8257E5" />
        <stop offset="1" stopColor="#FF008E" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export {
  Logo,
  Background,
  VscSignIn,
  VscSettingsGear,
  VscGithubInverted,
  VscAdd,
  IoChevronForwardOutline,
  IoAdd,
  VscSearch,
  VscClose,
  IoHeartOutline,
  IoHeart,
  BiLike,
  MdThumbUp,
};
