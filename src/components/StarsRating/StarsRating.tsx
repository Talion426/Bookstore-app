import { Rating } from "react-simple-star-rating";
import { Color } from "ui";

interface IProps {
  stars: string;
}

export const StarsRating = ({ stars }: IProps) => {
  return (
    <Rating
      initialValue={+stars}
      iconsCount={5}
      size={25}
      fillColor={Color.Primary}
      emptyColor={Color.Secondary}
      allowFraction={true}
      readonly={true}
    />
  );
};
