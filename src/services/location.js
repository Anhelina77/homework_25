export const setLocation = curLoc => {
  try {
    window.history.pushState(null, null, curLoc);
    return;
  } catch (error) {
    console.log('setLocation error', error);
  }
};

export const getHash = () => {
  try {
    return window.location.hash;
  } catch (error) {
    console.log('getHash error', error);
  }
};
