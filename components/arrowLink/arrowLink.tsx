import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { DownArrowContainer, UpArrowContainer } from "./styledArrow";

type THref = "blog" | "/" | "portfolio";
interface IArrowLink {
  color: string;
}

const ArrowLink: React.FC<IArrowLink> = (props) => {
  const { color } = props;
  const path = useRouter().pathname;
  const currentPath = useMemo(() => {
    return path === "/" ? "/" : path.replace("/", "");
  }, [path]);

  const ArrowIcon: React.FC<{ href: string; down: boolean }> = (props) => {
    const { href, down } = props;
    const buttonLabel = useMemo(() => `to${href}`, [href]);
    return (
      <Link href={href} style={{ color: color }}>
        {down ? (
          <DownArrowContainer>
            <IconButton aria-label={buttonLabel} style={{ color: color }}>
              <KeyboardArrowDownIcon style={{ fontSize: "40px", color: "inherit" }} />
            </IconButton>
          </DownArrowContainer>
        ) : (
          <UpArrowContainer>
            <IconButton aria-label={buttonLabel} style={{ color: color }}>
              <KeyboardArrowUpIcon style={{ fontSize: "40px", color: "inheirt" }} />
            </IconButton>
          </UpArrowContainer>
        )}
      </Link>
    );
  };

  const direction = useMemo(() => {
    const pathArr = {
      "/": <ArrowIcon href="blog" down />,
      blog: (
        <>
          <ArrowIcon href="/" down={false} />
          <ArrowIcon href="portfolio" down />
        </>
      ),
      portfolio: <ArrowIcon href="blog" down={false} />,
    };
    return pathArr[currentPath as THref];
  }, [currentPath]);

  return direction;
};

export default ArrowLink;
