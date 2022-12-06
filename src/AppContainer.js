import { useState } from "react";
import { Box, TextField } from "@mui/material";
import Hide from "./assets/hide.svg";
import Show from "./assets/show.svg";

const AppContainer = () => {
  const [show, setShow] = useState(true);

  const togglePassword = () => {
    setShow(!show);
  };

  const container = {
    minHeight: "100vh",
    backgroundColor: "#ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const showStyle = {
    position: "absolute",
    right: 10,
    top: 15,
  };

  return (
    <Box sx={container}>
      <Box sx={{ position: "relative", width: "350px" }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type={show ? "password" : "text"}
        />

        <Box onClick={togglePassword} sx={showStyle}>
          {show ? (
            <img src={Show} width="30px" alt="Show" />
          ) : (
            <img src={Hide} width="30px" alt="hide" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AppContainer;
