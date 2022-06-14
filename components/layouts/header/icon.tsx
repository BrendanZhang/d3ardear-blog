import Image from "next/image";

interface IIconProps {
  fill: string;
  weight: string;
  height: string;
}
const Icon = (props: IIconProps) => {
  const { fill, weight, height } = props;
  return (
    <svg
      width={weight}
      height={height}
      viewBox="0 0 128 128"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M95 96.5H87V100H41V87L45 83.7407V75.2222L33 85V108H95V96.5ZM74.7273 51L87 41V28H41V31H33V20H95V43L85.1818 51H74.7273Z"
        fill="inherit"
      />
      <path d="M84.5 30.5H72.5L72.5 43.5H81.5V39.0649H84.5L84.5 30.5Z" fill="inherit" />
      <path d="M84.5 88V96.5H72.5V86.5V53H81.5V86.5V88H84.5Z" fill="inherit" />
      <path d="M44 39.0649V30.5H56V74.7778L47 82.0048V39.0649H44Z" fill="inherit" />
      <path d="M44 96.5H56V77L47 84.5V87.9351H44V96.5Z" fill="inherit" />
      <path d="M45 43H37H34V50.5H37V79.5L45 73V43Z" fill="inherit" />
      <path
        d="M48 60H58.5H77.3185C79.5276 60 81.3185 61.7909 81.3185 64C81.3185 66.2091 79.5276 68 77.3185 68H47.5C46.1193 68 45 69.1193 45 70.5C45 71.8807 43.8807 73 42.5 73H42.25C40.7312 73 39.5 71.7688 39.5 70.25V56.75C39.5 55.2312 40.7312 54 42.25 54C43.7688 54 45 55.2312 45 56.75V57C45 58.6569 46.3431 60 48 60Z"
        fill="inherit"
      />
      <path d="M70 77H56V85H70V77Z" fill="inherit" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M89.8557 47.2102C89.6892 47.0223 89.5168 46.8392 89.3388 46.6612C88.1781 45.5004 86.8001 44.5797 85.2835 43.9515C83.9211 43.3872 82.4709 43.0689 81 43.01V43H80.5H58V51H80.5V51.0107C81.0896 51.0107 81.6733 51.1268 82.218 51.3524C82.7437 51.5702 83.2231 51.8858 83.6307 52.2824L89.8557 47.2102ZM76.6818 60H80.5V59.9894C81.0895 59.9894 81.6733 59.8732 82.218 59.6476C82.7627 59.422 83.2576 59.0913 83.6744 58.6745C84.0913 58.2576 84.422 57.7627 84.6476 57.218C84.8732 56.6733 84.9894 56.0896 84.9894 55.5C84.9894 54.9105 84.8732 54.3267 84.6476 53.782C84.6196 53.7144 84.59 53.6477 84.5589 53.5817L90.8346 48.4681C91.3138 49.1725 91.7209 49.9256 92.0485 50.7165C92.6767 52.233 93 53.8585 93 55.5C93 57.1415 92.6767 58.767 92.0485 60.2835C91.4804 61.6551 90.673 62.9133 89.6652 64C91.8049 66.307 93 69.3419 93 72.5C93 75.8152 91.683 78.9946 89.3388 81.3388C87.5929 83.0848 85.3836 84.2609 83 84.7475V76.2289C83.2406 76.0676 83.4667 75.8823 83.6745 75.6745C84.5164 74.8325 84.9894 73.6907 84.9894 72.5C84.9894 71.3094 84.5164 70.1675 83.6745 69.3256C82.8325 68.4836 81.6907 68.0107 80.5 68.0107L80.5 68L73 68V63L76.6818 60ZM74.1591 60H73V60.9444L74.1591 60Z"
        fill="inherit"
      />
    </svg>
  );
};
Icon.defaultProps = {
  weight: "32px",
  height: "32px",
} as Partial<IIconProps>;

export default Icon;
