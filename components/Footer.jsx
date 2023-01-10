import Link from "next/link";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"

const Footer = () => {
  return (
    <div>
      <Stack direction="column" spacing={2}>
        <Link href="/ninjas">
          <Button variant="contained">See Ninja Listing</Button>
        </Link>
        <Typography>Copyright 2022 Ninja List</Typography>
      </Stack>
    </div>
  );
};

export default Footer;
