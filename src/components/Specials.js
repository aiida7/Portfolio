import bruchetta from "../assets/images/bruschetta.png";
import salad from "../assets/images/greek-salad1.jpg";
import dessert from "../assets/images/lemon-dessert1.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Specials() {
  return (
    <>
      <div className="specials">
        <div className="specials-head">
          <h3>Specials</h3>

          <button id="button">Online Menu</button>
        </div>
      </div>

      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={salad} />
          <Card.Body>
            <Card.Title>Greek Salad</Card.Title>
            <Card.Text>
            Savor the freshness of crisp lettuce, the juiciness of ripe tomatoes,
            the crunch of cucumbers, and the tanginess of red onions. Every bite
            is a burst of vibrant flavors that will awaken your taste buds and leave
            you craving for more.
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={bruchetta} />
          <Card.Body>
            <Card.Title>Bruschetta</Card.Title>
            <Card.Text>
            Welcome to the world of bruschetta!
            Our bruschetta is a culinary masterpiece that will captivate your taste buds.
            Crafted with care and made with fresh ingridients, our bruschetta is a symphony of flavors that will leave you craving for more.
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dessert} />
          <Card.Body>
            <Card.Title>Lemon Cake</Card.Title>
            <Card.Text>
            Welcome to a world of zesty indulgence! Our lemon cake is a slice of sunshine that will awaken your
            taste buds. Bursting with the tangy sweetness of lemons, our cake is
             a perfectly balanced delight that will and brighten your day. <i class="fa-regular fa-moped"></i>
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Specials;
