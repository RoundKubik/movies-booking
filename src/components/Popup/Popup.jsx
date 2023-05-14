import { Dialog, DialogContent } from "@mui/material";

const Popup = ({ children, openPopup }) => {
  return (
    <Dialog
      sx={{
        padding: "0",
      }}
      PaperProps={{ sx: { borderRadius: "25px" } }}
      open={openPopup}
      maxWidth="lg"
    >
      <DialogContent
        sx={{
          padding: "0",
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#e7e7e7",
            WebkitBorderRadius: "10px",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            WebkitBorderRadius: "10px",
            borderRadius: "10px",
            background: "#2d1a67",
          },
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
