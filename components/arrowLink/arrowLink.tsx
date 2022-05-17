import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { DownArrowContainer, UpArrowContainer } from "./styledArrow";

type THref = "blog" | "/" | "portfolio";
interface IArrowLink {
  color: "light" | "dark";
  order: number;
  clickTrigger: (direction: "up" | "down") => void;
}

const ArrowLink: React.FC<IArrowLink> = (props) => {
  const { color, order: key, clickTrigger } = props;

  const path = useRouter().pathname;

  const ArrowIcon: React.FC<{ href: string; down: boolean }> = (props) => {
    const { href, down } = props;
    const buttonLabel = useMemo(() => `to${href}`, [href]);
    const colorStyle = {
      color: color === "light" ? "#eeeeee" : "#333333",
      transition: "color 300ms",
    };
    return (
      <div style={colorStyle}>
        {down ? (
          <DownArrowContainer>
            <IconButton
              aria-label={buttonLabel}
              style={{ color: "inherit" }}
              onClick={() => clickTrigger("down")}>
              <KeyboardArrowDownIcon style={{ fontSize: "40px", color: "inherit" }} />
            </IconButton>
          </DownArrowContainer>
        ) : (
          <UpArrowContainer>
            <IconButton
              aria-label={buttonLabel}
              style={{ color: "inherit" }}
              onClick={() => clickTrigger("up")}>
              <KeyboardArrowUpIcon style={{ fontSize: "40px", color: "inheirt" }} />
            </IconButton>
          </UpArrowContainer>
        )}
      </div>
    );
  };

  const direction = useMemo(() => {
    const pathArr = [
      <ArrowIcon href="blog" down />,
      <>
        <ArrowIcon href="/" down={false} />
        <ArrowIcon href="portfolio" down />
      </>,
      <ArrowIcon href="blog" down={false} />,
    ];
    return pathArr[key];
  }, [key]);

  return direction;
};

export default ArrowLink;
