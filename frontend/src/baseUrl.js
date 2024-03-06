let BASE_URL;

if (window.location.hostname === 'localhost') {
  BASE_URL = 'http://localhost:5000/api/v1';
} else {
  BASE_URL = 'https://backorangefi.seller.ecloudapp.cloud/api/v1';
}

export default { BASE_URL };
