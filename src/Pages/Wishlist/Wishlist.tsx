import "./Wishlist.css";
import { useWishlist } from "../../context/WishlistContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <section className="wishlist-page">
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <h2>Your wishlist is empty</h2>
          <p>Explore products and save your favorites here.</p>
          <button onClick={() => navigate("/shop")}>Explore Shop</button>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;