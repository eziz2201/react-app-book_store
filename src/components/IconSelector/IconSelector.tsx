interface IIconSelector {
  id: string;
}

const IconSelector = ({ id }: IIconSelector) => {
  switch (id) {
    case "favorites":
      return (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.612 2.41452C17.1722 1.96607 16.65 1.61034 16.0752 1.36763C15.5005 1.12492 14.8844 1 14.2623 1C13.6401 1 13.0241 1.12492 12.4493 1.36763C11.8746 1.61034 11.3524 1.96607 10.9126 2.41452L9.99977 3.34476L9.08699 2.41452C8.19858 1.50912 6.99364 1.00047 5.73725 1.00047C4.48085 1.00047 3.27591 1.50912 2.38751 2.41452C1.4991 3.31992 1 4.5479 1 5.82833C1 7.10875 1.4991 8.33674 2.38751 9.24214L3.30029 10.1724L9.99977 17L16.6992 10.1724L17.612 9.24214C18.0521 8.79391 18.4011 8.26171 18.6393 7.67596C18.8774 7.0902 19 6.46237 19 5.82833C19 5.19428 18.8774 4.56645 18.6393 3.9807C18.4011 3.39494 18.0521 2.86275 17.612 2.41452V2.41452Z"
            stroke="#313037"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "cancel":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6569 10.2426L7.41421 5.99999L11.6569 1.75735C12.0472 1.36702 12.0472 0.733456 11.6569 0.343133C11.2665 -0.0471895 10.633 -0.0471895 10.2426 0.343133L6 4.58577L1.75736 0.343133C1.36704 -0.0471895 0.733469 -0.0471895 0.343146 0.343133C-0.0471771 0.733456 -0.0471771 1.36702 0.343146 1.75735L4.58579 5.99999L0.343146 10.2426C-0.0478838 10.6337 -0.0471771 11.2665 0.343146 11.6568C0.733469 12.0472 1.36633 12.0479 1.75736 11.6568L6 7.4142L10.2426 11.6568C10.6337 12.0479 11.2665 12.0472 11.6569 11.6568C12.0472 11.2665 12.0479 10.6337 11.6569 10.2426Z"
            fill="#313037"
          />
        </svg>
      );
    case "logo":
      return (
        <svg
          width="138"
          height="29"
          viewBox="0 0 138 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.64 0.319998C8.90667 0.319998 10.56 0.853331 11.6 1.92C12.64 2.96 13.16 4.57333 13.16 6.76V7.76C13.16 10.64 12.2133 12.52 10.32 13.4C12.5067 14.2533 13.6 16.2533 13.6 19.4V21.68C13.6 23.84 13.0267 25.4933 11.88 26.64C10.76 27.76 9.10667 28.32 6.92 28.32H0V0.319998H6.64ZM6.36 15.72H4.4V24.32H6.92C7.69333 24.32 8.26667 24.12 8.64 23.72C9.01333 23.2933 9.2 22.5733 9.2 21.56V19.12C9.2 17.84 8.97333 16.96 8.52 16.48C8.09333 15.9733 7.37333 15.72 6.36 15.72ZM6.52 4.32H4.4V11.72H6.12C7 11.72 7.65333 11.4933 8.08 11.04C8.53333 10.5867 8.76 9.82666 8.76 8.76V7.2C8.76 5.28 8.01333 4.32 6.52 4.32Z"
            fill="#313037"
          />
          <path
            d="M20.29 6.76V21.88C20.29 23.72 21.05 24.64 22.57 24.64C24.09 24.64 24.85 23.72 24.85 21.88V6.76C24.85 4.92 24.09 4 22.57 4C21.05 4 20.29 4.92 20.29 6.76ZM15.89 21.6V7.04C15.89 4.8 16.4633 3.06666 17.61 1.84C18.7567 0.613332 20.41 0 22.57 0C24.73 0 26.3833 0.613332 27.53 1.84C28.6767 3.06666 29.25 4.8 29.25 7.04V21.6C29.25 23.84 28.6767 25.5733 27.53 26.8C26.3833 28.0267 24.73 28.64 22.57 28.64C20.41 28.64 18.7567 28.0267 17.61 26.8C16.4633 25.5733 15.89 23.84 15.89 21.6Z"
            fill="#313037"
          />
          <path
            d="M36.1494 6.76V21.88C36.1494 23.72 36.9094 24.64 38.4294 24.64C39.9494 24.64 40.7094 23.72 40.7094 21.88V6.76C40.7094 4.92 39.9494 4 38.4294 4C36.9094 4 36.1494 4.92 36.1494 6.76ZM31.7494 21.6V7.04C31.7494 4.8 32.3227 3.06666 33.4694 1.84C34.616 0.613332 36.2694 0 38.4294 0C40.5894 0 42.2427 0.613332 43.3894 1.84C44.536 3.06666 45.1094 4.8 45.1094 7.04V21.6C45.1094 23.84 44.536 25.5733 43.3894 26.8C42.2427 28.0267 40.5894 28.64 38.4294 28.64C36.2694 28.64 34.616 28.0267 33.4694 26.8C32.3227 25.5733 31.7494 23.84 31.7494 21.6Z"
            fill="#313037"
          />
          <path
            d="M58.0088 28.32L53.7288 17.16L52.3688 19.72V28.32H47.9688V0.319998H52.3688V12.52L58.1287 0.319998H62.5288L56.4088 12.8L62.5288 28.32H58.0088Z"
            fill="#313037"
          />
          <path
            d="M63.7759 7.04C63.7759 4.77333 64.3226 3.04 65.4159 1.84C66.5093 0.613332 68.1226 0 70.2559 0C72.3893 0 74.0026 0.613332 75.0959 1.84C76.1893 3.04 76.7359 4.77333 76.7359 7.04V7.92H72.5759V6.76C72.5759 4.92 71.8426 4 70.3759 4C68.9093 4 68.1759 4.92 68.1759 6.76C68.1759 7.53333 68.3359 8.26667 68.6559 8.96C68.9759 9.65333 69.3893 10.28 69.8959 10.84C70.4026 11.4 70.9626 11.96 71.5759 12.52C72.1893 13.0533 72.7893 13.6267 73.3759 14.24C73.9893 14.8267 74.5493 15.4667 75.0559 16.16C75.5626 16.8267 75.9759 17.6267 76.2959 18.56C76.6159 19.4933 76.7759 20.5067 76.7759 21.6C76.7759 23.8667 76.2159 25.6133 75.0959 26.84C73.9759 28.04 72.3493 28.64 70.2159 28.64C68.0826 28.64 66.4559 28.04 65.3359 26.84C64.2159 25.6133 63.6559 23.8667 63.6559 21.6V19.88H67.8159V21.88C67.8159 23.6933 68.5759 24.6 70.0959 24.6C71.6159 24.6 72.3759 23.6933 72.3759 21.88C72.3759 20.84 72.0826 19.8667 71.4959 18.96C70.9093 18.0267 70.1893 17.1867 69.3359 16.44C68.5093 15.6933 67.6693 14.92 66.8159 14.12C65.9626 13.2933 65.2426 12.28 64.6559 11.08C64.0693 9.85333 63.7759 8.50667 63.7759 7.04Z"
            fill="#313037"
          />
          <path
            d="M78.0169 4.32V0.319998H91.6169V4.32H87.0169V28.32H82.6169V4.32H78.0169Z"
            fill="#313037"
          />
          <path
            d="M97.5947 6.76V21.88C97.5947 23.72 98.3547 24.64 99.8747 24.64C101.395 24.64 102.155 23.72 102.155 21.88V6.76C102.155 4.92 101.395 4 99.8747 4C98.3547 4 97.5947 4.92 97.5947 6.76ZM93.1947 21.6V7.04C93.1947 4.8 93.768 3.06666 94.9147 1.84C96.0614 0.613332 97.7147 0 99.8747 0C102.035 0 103.688 0.613332 104.835 1.84C105.981 3.06666 106.555 4.8 106.555 7.04V21.6C106.555 23.84 105.981 25.5733 104.835 26.8C103.688 28.0267 102.035 28.64 99.8747 28.64C97.7147 28.64 96.0614 28.0267 94.9147 26.8C93.768 25.5733 93.1947 23.84 93.1947 21.6Z"
            fill="#313037"
          />
          <path
            d="M123.094 28.32H118.614C118.347 27.52 118.214 26.3733 118.214 24.88V20.48C118.214 19.2 117.987 18.2933 117.534 17.76C117.081 17.2 116.347 16.92 115.334 16.92H113.814V28.32H109.414V0.319998H116.054C118.321 0.319998 119.974 0.853331 121.014 1.92C122.054 2.96 122.574 4.57333 122.574 6.76V8.96C122.574 11.84 121.614 13.7333 119.694 14.64C121.641 15.4667 122.614 17.4533 122.614 20.6V24.92C122.614 26.44 122.774 27.5733 123.094 28.32ZM115.934 4.32H113.814V12.92H115.534C116.414 12.92 117.067 12.6933 117.494 12.24C117.947 11.7867 118.174 11.0267 118.174 9.96V7.2C118.174 5.28 117.427 4.32 115.934 4.32Z"
            fill="#313037"
          />
          <path
            d="M129.908 4.32V12.12H135.948V16.12H129.908V24.32H137.508V28.32H125.508V0.319998H137.508V4.32H129.908Z"
            fill="#313037"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.71 18.29L15.18 13.76C16.32 12.31 17 10.48 17 8.5C17 3.81 13.19 0 8.5 0C3.81 0 0 3.81 0 8.5C0 13.19 3.81 17 8.5 17C10.48 17 12.31 16.32 13.76 15.18L18.29 19.71C18.49 19.9 18.74 20 19 20C19.26 20 19.51 19.9 19.71 19.71C20.1 19.32 20.1 18.68 19.71 18.29"
            fill="#4C4B5E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 8.5C2 4.92 4.92 2 8.5 2C12.08 2 15 4.92 15 8.5C15 10.29 14.27 11.92 13.09 13.09C11.92 14.27 10.29 15 8.5 15C4.92 15 2 12.08 2 8.5"
            fill="white"
          />
        </svg>
      );
    case "cart":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.1 1L1 17.3929C1 17.8191 1.15979 18.2279 1.44422 18.5293C1.72865 18.8307 2.11442 19 2.51667 19H17.4833C17.8856 19 18.2713 18.8307 18.5558 18.5293C18.8402 18.2279 19 17.8191 19 17.3929L16.9 1H3.1Z"
            stroke="#313037"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 7C13 7.53043 12.6839 8.03914 12.1213 8.41421C11.5587 8.78929 10.7956 9 10 9C9.20435 9 8.44129 8.78929 7.87868 8.41421C7.31607 8.03914 7 7.53043 7 7"
            stroke="#313037"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "account":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
            stroke="#313037"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
            stroke="#313037"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "red-circle":
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="6"
            cy="4"
            r="5"
            fill="#FC857F"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      );
    case "burger-open":
      return (
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 8H1C0.448 8 0 7.552 0 7C0 6.448 0.448 6 1 6H19C19.553 6 20 6.448 20 7C20 7.552 19.553 8 19 8"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 2H1C0.448 2 0 1.552 0 1C0 0.448 0.448 0 1 0H19C19.553 0 20 0.448 20 1C20 1.552 19.553 2 19 2"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 14H1C0.448 14 0 13.553 0 13C0 12.447 0.448 12 1 12H19C19.553 12 20 12.447 20 13C20 13.553 19.553 14 19 14"
            fill="black"
          />
        </svg>
      );
    case "back":
      return (
        <svg
          width="43"
          height="16"
          viewBox="0 0 43 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00116 1.99897C8.00116 2.25897 7.90116 2.50897 7.71116 2.70897L3.41116 6.99897L41.0012 6.99897C41.5512 6.99897 42.0012 7.44896 42.0012 7.99896C42.0012 8.54896 41.5512 8.99896 41.0012 8.99896L3.41116 8.99896L7.71116 13.289C8.10116 13.679 8.10116 14.319 7.71116 14.709C7.32116 15.099 6.68116 15.099 6.29116 14.709L0.291162 8.70896C0.201162 8.61896 0.131162 8.50896 0.0811621 8.38896C0.0611621 8.33896 0.0411621 8.29896 0.0411621 8.24896C-0.00883789 8.08896 -0.00883789 7.90896 0.0411621 7.74896C0.0411621 7.69896 0.0611621 7.65897 0.0811621 7.60896C0.131162 7.48897 0.201162 7.37896 0.291162 7.28896L6.29116 1.28897C6.68116 0.898965 7.32116 0.898965 7.71116 1.28897C7.90116 1.48897 8.00116 1.73897 8.00116 1.99897Z"
            fill="#313037"
          />
        </svg>
      );
    case "arrow-down":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7071 6.70711C13.0976 6.31658 13.0976 5.68342 12.7071 5.29289C12.3166 4.90237 11.6834 4.90237 11.2929 5.29289L12.7071 6.70711ZM8 10L7.29289 10.7071L8 11.4142L8.70711 10.7071L8 10ZM4.70711 5.29289C4.31658 4.90237 3.68342 4.90237 3.29289 5.29289C2.90237 5.68342 2.90237 6.31658 3.29289 6.70711L4.70711 5.29289ZM11.2929 5.29289L7.29289 9.29289L8.70711 10.7071L12.7071 6.70711L11.2929 5.29289ZM8.70711 9.29289L4.70711 5.29289L3.29289 6.70711L7.29289 10.7071L8.70711 9.29289Z"
            fill="#313037"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.39703 17.997V9.80099H9.16203L9.57303 6.59199H6.39703V4.54799C6.39703 3.62199 6.65503 2.98799 7.98403 2.98799H9.66803V0.126986C8.84867 0.0391771 8.02508 -0.00322112 7.20103 -1.39392e-05C4.75703 -1.39392e-05 3.07903 1.49199 3.07903 4.23099V6.58599H0.332031V9.79499H3.08503V17.997H6.39703Z"
            fill="#C6CBCD"
          />
        </svg>
      );
    case "twitter":
      return (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.633 3.978C17.646 4.153 17.646 4.327 17.646 4.501C17.646 9.826 13.593 15.962 6.186 15.962C3.904 15.962 1.784 15.301 0 14.153C0.324 14.19 0.636 14.203 0.973 14.203C2.78599 14.2074 4.54765 13.6011 5.974 12.482C5.13342 12.4668 4.31858 12.1895 3.64324 11.6887C2.9679 11.188 2.46578 10.4889 2.207 9.689C2.456 9.726 2.706 9.751 2.968 9.751C3.329 9.751 3.692 9.701 4.029 9.614C3.11676 9.42981 2.29647 8.93535 1.70762 8.21469C1.11876 7.49402 0.797693 6.59165 0.799 5.661V5.611C1.336 5.91 1.959 6.097 2.619 6.122C2.06609 5.75459 1.61272 5.25602 1.29934 4.67079C0.98596 4.08556 0.822313 3.43186 0.823 2.768C0.823 2.02 1.022 1.334 1.371 0.736001C2.38314 1.98102 3.6455 2.99956 5.07634 3.72566C6.50717 4.45176 8.07456 4.86922 9.677 4.951C9.615 4.651 9.577 4.34 9.577 4.028C9.57674 3.49896 9.68075 2.97506 9.88308 2.48624C10.0854 1.99742 10.3821 1.55327 10.7562 1.17919C11.1303 0.805102 11.5744 0.508411 12.0632 0.306078C12.5521 0.103746 13.076 -0.000262379 13.605 4.97063e-07C14.765 4.97063e-07 15.812 0.486 16.548 1.272C17.4498 1.09762 18.3145 0.768422 19.104 0.299C18.8034 1.22982 18.1738 2.0191 17.333 2.519C18.1328 2.42778 18.9144 2.21745 19.652 1.895C19.1011 2.6981 18.4185 3.40235 17.633 3.978Z"
            fill="#C6CBCD"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0ZM5.339 15.337H2.667V6.747H5.339V15.337ZM4.003 5.574C3.59244 5.574 3.1987 5.41091 2.9084 5.1206C2.61809 4.8303 2.455 4.43655 2.455 4.026C2.455 3.61544 2.61809 3.22171 2.9084 2.9314C3.1987 2.64109 3.59244 2.478 4.003 2.478C4.41356 2.478 4.80729 2.64109 5.0976 2.9314C5.38791 3.22171 5.551 3.61544 5.551 4.026C5.551 4.43655 5.38791 4.8303 5.0976 5.1206C4.80729 5.41091 4.41356 5.574 4.003 5.574ZM15.338 15.337H12.669V11.16C12.669 10.164 12.651 8.883 11.281 8.883C9.891 8.883 9.68 9.969 9.68 11.09V15.338H7.013V6.748H9.573V7.922H9.61C9.965 7.247 10.837 6.535 12.134 6.535C14.838 6.535 15.337 8.313 15.337 10.627V15.337H15.338Z"
            fill="#C6CBCD"
          />
        </svg>
      );
    case "plus":
      return (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 7.18115H9V1.18115C9 0.629152 8.552 0.181152 8 0.181152C7.448 0.181152 7 0.629152 7 1.18115V7.18115H1C0.448 7.18115 0 7.62915 0 8.18115C0 8.73315 0.448 9.18115 1 9.18115H7V15.1812C7 15.7342 7.448 16.1812 8 16.1812C8.552 16.1812 9 15.7342 9 15.1812V9.18115H15C15.553 9.18115 16 8.73315 16 8.18115C16 7.62915 15.553 7.18115 15 7.18115"
            fill="#313037"
          />
        </svg>
      );
    case "minus":
      return (
        <svg
          width="12"
          height="3"
          viewBox="0 0 12 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.362305" width="12" height="2" rx="1" fill="#313037" />
        </svg>
      );
    case "prev":
      return (
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.7075 1.2875C7.8975 1.4875 7.9975 1.7375 7.9975 1.9975C7.9975 2.2575 7.8975 2.5075 7.7075 2.7075L3.4075 6.9975L16.9975 6.9975C17.5475 6.9975 17.9975 7.4475 17.9975 7.9975C17.9975 8.5475 17.5475 8.9975 16.9975 8.9975L3.4075 8.9975L7.7075 13.2875C8.0975 13.6775 8.0975 14.3175 7.7075 14.7075C7.3175 15.0975 6.6775 15.0975 6.2875 14.7075L0.2875 8.7075C0.1975 8.6175 0.1275 8.5075 0.0775003 8.3875C0.0575003 8.3375 0.0375003 8.2975 0.0375003 8.2475C-0.0124997 8.0875 -0.0124997 7.9075 0.0375003 7.7475C0.0375003 7.6975 0.0575003 7.6575 0.0775003 7.6075C0.1275 7.4875 0.1975 7.3775 0.2875 7.2875L6.2875 1.2875C6.6775 0.8975 7.3175 0.8975 7.7075 1.2875Z"
            fill="#313037"
          />
        </svg>
      );
    case "next":
      return (
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2925 13.7125C10.1025 13.5125 10.0025 13.2625 10.0025 13.0025C10.0025 12.7425 10.1025 12.4925 10.2925 12.2925L14.5925 8.0025L1.0025 8.0025C0.452501 8.0025 0.0025002 7.5525 0.00250023 7.0025C0.00250025 6.4525 0.452501 6.0025 1.0025 6.0025L14.5925 6.0025L10.2925 1.7125C9.9025 1.3225 9.9025 0.6825 10.2925 0.2925C10.6825 -0.0975003 11.3225 -0.0975003 11.7125 0.2925L17.7125 6.2925C17.8025 6.3825 17.8725 6.4925 17.9225 6.6125C17.9425 6.6625 17.9625 6.7025 17.9625 6.7525C18.0125 6.9125 18.0125 7.0925 17.9625 7.2525C17.9625 7.3025 17.9425 7.3425 17.9225 7.3925C17.8725 7.5125 17.8025 7.6225 17.7125 7.7125L11.7125 13.7125C11.3225 14.1025 10.6825 14.1025 10.2925 13.7125Z"
            fill="#313037"
          />
        </svg>
      );
    default:
      return <></>;
  }
};

export default IconSelector;
