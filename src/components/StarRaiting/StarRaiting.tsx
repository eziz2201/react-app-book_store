import StarRatings from "react-star-ratings";
import { colors } from "../../ui/colors";

interface IStarRaiting {
  rating: number;
}

const StarRaiting = ({ rating }: IStarRaiting) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor={colors.PRIMARY}
      starEmptyColor={colors.GRAY}
      numberOfStars={5}
      name="rating"
      starDimension="16px"
      starSpacing="5px"
    />
  );
};

export default StarRaiting;
