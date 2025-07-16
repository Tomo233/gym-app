import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <p className='text-white "text-5xl'>Loading...</p>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={90} />
      </Box>
    </div>
  );
}

export default Loader;
