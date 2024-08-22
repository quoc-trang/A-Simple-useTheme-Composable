// @ts-nocheck
// remove the line above if you want to use TS
// if you prefer plain JS, leave as is

import { ref } from "vue";
export const useTheme = () => {
  const theme = ref("light");
  
  return theme;
};
