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
  order: number;
  triggerUp: () => void;
  triggerDown: () => void;
}

const ArrowLink: React.FC<IArrowLink> = (props) => {
  const { color, order: key, triggerUp, triggerDown } = props;
  const path = useRouter().pathname;

  const ArrowIcon: React.FC<{ href: string; down: boolean }> = (props) => {
    const { href, down } = props;
    const buttonLabel = useMemo(() => `to${href}`, [href]);
    return (
      <Link href={href} style={{ color: color }}>
        {down ? (
          <DownArrowContainer>
            <IconButton
              aria-label={buttonLabel}
              style={{ color: color }}
              onClick={() => triggerDown()}>
              <KeyboardArrowDownIcon style={{ fontSize: "40px", color: "inherit" }} />
            </IconButton>
          </DownArrowContainer>
        ) : (
          <UpArrowContainer>
            <IconButton
              aria-label={buttonLabel}
              style={{ color: color }}
              onClick={() => triggerUp()}>
              <KeyboardArrowUpIcon style={{ fontSize: "40px", color: "inheirt" }} />
            </IconButton>
          </UpArrowContainer>
        )}
      </Link>
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
