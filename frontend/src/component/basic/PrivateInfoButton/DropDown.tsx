import { Grid } from "@mui/material";
import { Box } from "@mui/system";

interface PrivateInfoButtonProps {
  src: string;
  title: string;
  onClick: () => void;
}

const PrivateInfoDropDownButton = (props: PrivateInfoButtonProps) => {
  return (
    <Grid direction='column'>
      <Box>img</Box>
      <Box>span</Box>
    </Grid>
  );
};

export default PrivateInfoDropDownButton;
