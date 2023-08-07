function IsMobile() {
    // const userAgent = navigator.userAgent;
    // const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Windows Phone|KFAPWI/i;
    // return mobileRegex.test(userAgent);

    const mobileScreenWidthThreshold = 768; // You can adjust this threshold as needed
    return window.innerWidth < mobileScreenWidthThreshold;
  }
  
export default IsMobile;