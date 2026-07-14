import "./Wishlist.css";
import { useWishlist } from "../../context/WishlistContext";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <section className="wishlist-page">
      <h1>My Wishlist</h1>

      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default Wishlist;