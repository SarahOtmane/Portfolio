import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Icon {
  id: string;
  viewBox: string;
  content: string;
}

@Component({
  selector: 'app-tech-icons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg style="display: none;">
      <defs>
        <symbol *ngFor="let icon of icons" [id]="icon.id" [attr.viewBox]="icon.viewBox" [innerHTML]="icon.content"></symbol>
      </defs>
    </svg>
  `
})
export class TechIcons {
  icons: Icon[] = [
    {
      id: 'icon-react',
      viewBox: '0 0 51 51',
      content: `
        <circle cx="25.0741" cy="25.074" r="24.8107" fill="url(#paint0_linear_react)" stroke="url(#paint1_linear_react)" stroke-width="0.526653"/>
        <path d="M26.0117 27.9099C27.3422 27.9099 28.4207 26.8309 28.4207 25.4998C28.4207 24.1688 27.3422 23.0897 26.0117 23.0897C24.6812 23.0897 23.6027 24.1688 23.6027 25.4998C23.6027 26.8309 24.6812 27.9099 26.0117 27.9099Z" fill="#00D8FF"/>
        <path d="M26.0116 31.021C22.6283 31.021 19.6722 30.6226 17.4599 29.864C16.0251 29.3743 14.8061 28.7214 13.9375 27.9772C13.0162 27.1898 12.5267 26.3305 12.5267 25.4999C12.5267 23.9059 14.2735 22.3456 17.2056 21.3278C19.605 20.4924 22.7339 20.0267 26.0068 20.0267C29.222 20.0267 32.3077 20.478 34.6927 21.3038C36.0892 21.7839 37.265 22.408 38.1 23.0994C39.0069 23.8579 39.4868 24.6885 39.4868 25.4999C39.4868 27.1562 37.5337 28.8318 34.3856 29.8736C32.1589 30.613 29.1836 31.021 26.0116 31.021ZM26.0116 21.179C22.9067 21.179 19.8354 21.6303 17.5895 22.4128C14.8925 23.3538 13.6832 24.6405 13.6832 25.4999C13.6832 26.3929 14.9837 27.7996 17.8342 28.7742C19.9266 29.4895 22.7579 29.8688 26.0116 29.8688C29.0636 29.8688 31.9094 29.4847 34.0257 28.779C36.9866 27.7948 38.3399 26.3881 38.3399 25.4999C38.3399 25.0438 37.9944 24.5061 37.3657 23.9828C36.6411 23.3778 35.5853 22.8257 34.3232 22.3888C32.0534 21.6111 29.102 21.179 26.0116 21.179Z" fill="#00D8FF"/>
        <linearGradient id="paint0_linear_react" x1="10.6521" y1="0.526612" x2="48.0181" y2="9.42652" gradientUnits="userSpaceOnUse">
          <stop stop-color="#28293E"/>
          <stop offset="1" stop-color="#28293E"/>
        </linearGradient>
        <linearGradient id="paint1_linear_react" x1="25.0741" y1="0.526611" x2="25.0741" y2="49.6214" gradientUnits="userSpaceOnUse">
          <stop stop-color="#66699C" stop-opacity="0.43"/>
          <stop offset="1" stop-color="#363749" stop-opacity="0.49"/>
        </linearGradient>
      `
    },
    {
      id: 'icon-tailwind',
      viewBox: '0 0 51 51',
      content: `
        <circle cx="25.0741" cy="25.074" r="24.8107" fill="url(#paint0_linear_tailwind)" stroke="url(#paint1_linear_tailwind)" stroke-width="0.526653"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0432 17.7782C21.6206 17.7782 19.482 19.5002 18.626 22.9443C19.9095 21.2222 21.4068 20.5766 23.1179 21.0069C24.0941 21.2523 24.7922 21.9651 25.5642 22.7543C26.8226 24.0395 28.2792 25.5268 31.4598 25.5268C34.8819 25.5268 37.021 23.8048 37.8765 20.3612C36.5935 22.0832 35.0962 22.7289 33.3851 22.2981C32.4084 22.0527 31.7103 21.3399 30.9383 20.5511C29.6799 19.265 28.2238 17.7782 25.0432 17.7782ZM18.626 25.5268C15.2039 25.5268 13.0649 27.2488 12.2094 30.6928C13.4929 28.9708 14.9902 28.3252 16.7007 28.7554C17.6774 29.0008 18.3755 29.7137 19.1476 30.5029C20.406 31.788 21.862 33.2753 25.0432 33.2753C28.4653 33.2753 30.6043 31.5538 31.4598 28.1098C30.1763 29.8318 28.679 30.4774 26.968 30.0472C25.9917 29.8013 25.2936 29.0884 24.5216 28.2997C23.2632 27.0146 21.8067 25.5268 18.626 25.5268Z" fill="#38BDF8"/>
        <linearGradient id="paint0_linear_tailwind" x1="10.6521" y1="0.526612" x2="48.0181" y2="9.42652" gradientUnits="userSpaceOnUse">
          <stop stop-color="#28293E"/>
          <stop offset="1" stop-color="#28293E"/>
        </linearGradient>
        <linearGradient id="paint1_linear_tailwind" x1="25.0741" y1="0.526611" x2="25.0741" y2="49.6214" gradientUnits="userSpaceOnUse">
          <stop stop-color="#66699C" stop-opacity="0.43"/>
          <stop offset="1" stop-color="#363749" stop-opacity="0.49"/>
        </linearGradient>
      `
    },
    {
      id: 'icon-typescript',
      viewBox: '0 0 51 51',
      content: `
        <circle cx="25.0741" cy="25.074" r="24.8107" fill="url(#paint0_linear_ts)" stroke="url(#paint1_linear_ts)" stroke-width="0.526653"/>
        <g clip-path="url(#clip0_ts)">
          <path d="M33.9268 13.5267H17.1268C15.1386 13.5267 13.5268 15.1385 13.5268 17.1267V33.9267C13.5268 35.915 15.1386 37.5267 17.1268 37.5267H33.9268C35.915 37.5267 37.5268 35.915 37.5268 33.9267V17.1267C37.5268 15.1385 35.915 13.5267 33.9268 13.5267Z" fill="#3178C6"/>
          <path d="M24.4488 26.8394H27.4488V24.9175H19.0582V26.8394H22.0582V35.4175H24.4488V26.8394Z" fill="white"/>
        </g>
        <linearGradient id="paint0_linear_ts" x1="10.6521" y1="0.526612" x2="48.0181" y2="9.42652" gradientUnits="userSpaceOnUse">
          <stop stop-color="#28293E"/>
          <stop offset="1" stop-color="#28293E"/>
        </linearGradient>
        <linearGradient id="paint1_linear_ts" x1="25.0741" y1="0.526611" x2="25.0741" y2="49.6214" gradientUnits="userSpaceOnUse">
          <stop stop-color="#66699C" stop-opacity="0.43"/>
          <stop offset="1" stop-color="#363749" stop-opacity="0.49"/>
        </linearGradient>
        <clipPath id="clip0_ts">
          <rect width="24" height="24" fill="white" transform="translate(13.5268 13.5267)"/>
        </clipPath>
      `
    },
    {
      id: 'icon-nestjs',
      viewBox: '0 0 51 51',
      content: `
        <circle cx="25.0741" cy="25.074" r="24.8107" fill="url(#paint0_linear_nest)" stroke="url(#paint1_linear_nest)" stroke-width="0.526653"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0693 14.5266C24.903 14.5266 24.7486 14.5608 24.606 14.6065C24.909 14.8004 25.0753 15.0571 25.1584 15.348C25.1644 15.3879 25.1763 15.4164 25.1822 15.4563C25.1882 15.4906 25.1941 15.5248 25.1941 15.559C25.2178 16.061 25.0575 16.1237 24.9446 16.4203C24.7723 16.8025 24.8199 17.2132 25.0278 17.544C25.0456 17.5839 25.0693 17.6295 25.099 17.6695C24.8733 16.2264 26.1266 16.0096 26.3583 15.559C26.3761 15.1654 26.0375 14.9031 25.7702 14.7205C25.5148 14.5722 25.2832 14.5266 25.0693 14.5266Z" fill="#E0234E"/>
        <linearGradient id="paint0_linear_nest" x1="10.6521" y1="0.526612" x2="48.0181" y2="9.42652" gradientUnits="userSpaceOnUse">
          <stop stop-color="#28293E"/>
          <stop offset="1" stop-color="#28293E"/>
        </linearGradient>
        <linearGradient id="paint1_linear_nest" x1="25.0741" y1="0.526611" x2="25.0741" y2="49.6214" gradientUnits="userSpaceOnUse">
          <stop stop-color="#66699C" stop-opacity="0.43"/>
          <stop offset="1" stop-color="#363749" stop-opacity="0.49"/>
        </linearGradient>
      `
    },
    {
      id: 'icon-docker',
      viewBox: '0 0 53 51',
      content: `
        <circle cx="25.5474" cy="25.074" r="24.8107" fill="url(#paint0_linear_docker)" stroke="url(#paint1_linear_docker)" stroke-width="0.526653"/>
        <linearGradient id="paint0_linear_docker" x1="11.1254" y1="0.526612" x2="48.4914" y2="9.42652" gradientUnits="userSpaceOnUse">
          <stop stop-color="#28293E"/>
          <stop offset="1" stop-color="#28293E"/>
        </linearGradient>
        <linearGradient id="paint1_linear_docker" x1="25.5474" y1="0.526611" x2="25.5474" y2="49.6214" gradientUnits="userSpaceOnUse">
          <stop stop-color="#66699C" stop-opacity="0.43"/>
          <stop offset="1" stop-color="#363749" stop-opacity="0.49"/>
        </linearGradient>
      `
    }
  ];
}