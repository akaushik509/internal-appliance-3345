import { extendTheme } from "@chakra-ui/react";
const styles = {
  global: {
    body: {
      fontFamily: "`Montserrat`,sans-serif",
      backgroundColor: "white",
    },
  },
};

export const theme = extendTheme({ styles });
