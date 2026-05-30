import { useParams, Link } from "react-router-dom";
import itemsData from "../data/itemsData";

function ItemDetails() {
  const { id } = useParams();

  const item = itemsData.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <main>
        <h1>Item Not Found</h1>
        <p>This item does not exist.</p>
        <Link to="/marketplace">Back to Marketplace</Link>
      </main>
    );
  }

  return (
    <main>
      <section className="item-details">
        <img src={item.image} alt={item.title} className="item-details-img" />

        <div className="item-details-info">
          <p className="item-category">{item.category}</p>
          <h1>{item.title}</h1>
          <h2>${item.price}</h2>

          <p>{item.description}</p>

          <p><strong>Condition:</strong> {item.condition}</p>
          <p><strong>Seller:</strong> {item.seller}</p>
          <p><strong>Meet-up Location:</strong> {item.location}</p>

          <Link to="/contact-seller" className="primary-btn">
            Contact Seller
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ItemDetails;