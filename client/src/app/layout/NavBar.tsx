import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";

type Props = {
  openForm: () => void;
};

export default function NavBar({ openForm }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #701873 0%, #6a21ae 69%, #a720ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Group fontSize="large" />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                EventBond
              </Typography>
            </Box>

            {/* Navigation */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "white" }}
              >
                Activities
              </Button>
              <Button
                sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "white" }}
              >
                About
              </Button>
              <Button
                sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "white" }}
              >
                Contact
              </Button>
            </Box>

            {/* Action */}
            <Button
              onClick={openForm}
              size="large"
              variant="contained"
              color="warning"
            >
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
