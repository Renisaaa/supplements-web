import Card from "react-bootstrap/Card";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ProductType } from "@/shared/types";
import ButtonLink from "@/shared/ButtonLink";
import { useProductCart } from "../cart/ProductCartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { StarIcons } from "@/shared/StarIcons";

export default function ResponsiveCard({
  id,
  images,
  name,
  details,
  price,
  oldprice,
  inStock,
  highlights,
  reviews,
  href,
  description,
  benefits,
  features,
}: ProductType) {
  const { setProductDetails, increaseCartQuantity, openCart } =
    useProductCart();

  const handleBuyNowClick = () => {
    setProductDetails({
      id,
      name,
      price,
      oldprice,
      inStock,
      images,
      details,
      highlights,
      reviews,
      href,
    });

    increaseCartQuantity(id);
    openCart();
  };

  const handleRegularClick = () => {
    setProductDetails({
      id,
      name,
      price,
      oldprice,
      inStock,
      images,
      details,
      highlights,
      reviews,
      href,
    });
    openCart();
  };

  const isBelowsxxScreens = useMediaQuery("(max-width: 325px)");
  const isBelowsxScreens = useMediaQuery("(max-width: 480px)");
  const isBelowSmallScreens = useMediaQuery("(max-width: 768px)");
  const isMediumScreens = useMediaQuery(
    "(min-width: 768px)" && "(max-width: 1060px)",
  );
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");

  let cardStyle;
  if (isBelowsxxScreens) {
    cardStyle = { width: "7rem", height: "23rem", margin: "0.5rem" };
  } else if (isBelowsxScreens) {
    cardStyle = { width: "8rem", height: "25rem", margin: "0.5rem" };
  } else if (isBelowSmallScreens) {
    cardStyle = { width: "11rem", height: "25rem", margin: "0.5rem" };
  } else if (isMediumScreens) {
    cardStyle = { width: "16rem", height: "25rem", margin: "0.5rem" };
  } else if (isAboveMediumScreens) {
    cardStyle = { width: "17rem", height: "25rem", margin: "0.5rem" };
  }
  if (isAboveLargeScreens) {
    cardStyle = { width: "20rem", height: "28rem", margin: "0.5rem" };
  }

  const [isFavorite, setFavorite] = useState(false);
  const [showBuyBtn, setShowBuyBtn] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowBuyBtn(true)}
      onMouseLeave={() => setShowBuyBtn(false)}
    >
      <Link
        key={id}
        onClick={handleRegularClick}
        to="/productpage"
        className="no-underline"
      >
        <Card style={cardStyle} className="border-0">
          <span className="relative">
            {showBuyBtn && (
              <div
                className="absolute bottom-0 right-5 w-10 h-10 bg-black text-white flex justify-center items-center text-2xl"
                onClick={handleBuyNowClick}
              >
                +
              </div>
            )}

            <Card.Img variant="top" src={images[0].src} alt={images[0].alt} />
          </span>

          <Card.Body className="flex flex-col justify-between">
            <div className="mt-2">
              <Card.Title>
                <h3 className="text-center text-sm font-bold">{name}</h3>
              </Card.Title>
            </div>

            <div className="mt-auto flex justify-center items-center flex-col">
              <span className="flex  justify-center xxs:flex-col gap-1  xxs:text-xs">
                <h3 className=" flex font-bold text-sm xxs:text-md mb-0 text-gray-500">
                  Rs. {price}
                </h3>
              </span>
              <StarIcons />
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
