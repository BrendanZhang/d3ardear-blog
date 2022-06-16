import { Button, IconButton } from "@mui/material";
import Link from "next/link";

export const ActionButtons: React.FC<{ device: "mobile" | "desktop"; active: boolean }> = (
  props
) => {
  const { device, active } = props;
  const IconStyle = {
    fontsize: "20px",
    color: "inherit",
    margin: "0 0.5em",
    transition: "color 300ms",
  };
  return (
    <>
      <Link href="/blog">
        <Button aria-label="blog" style={IconStyle}>
          BLOG
        </Button>
      </Link>
      <Link href="/portfolio">
        <Button aria-label="github" style={IconStyle}>
          PROJECT
        </Button>
      </Link>
    </>
  );
};
