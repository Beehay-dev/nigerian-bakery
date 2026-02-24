import separator from '../../../assets/separator.png'
import './order.css';

function Order() {
  return (
    <section className="order-hero">
      <div className="order-container">
        <div className="order">
          <div className="order-text">
            <h1 className='order-txt'>Choose your Flavour</h1>
            <h2 className='order-description'>Order online</h2>
          </div>
          <img src={separator} alt="separator-image" />
          <p className='text'>
            Explore our diverse menu of delicious Nigerian baked goods from traditional treats to modern favorites.
          </p>
        </div>

        <form action="">
          <div className="order-form">
            <input type="text" placeholder='NAME' required />
            <input type="tel" placeholder='PHONE NUMBER' required />
            <select name="flavour" required>
              <option value="">FLAVOURS</option>
              <option value="chocolate">Chocolate</option>
              <option value="vanilla">Vanilla</option>
              <option value="red-velvet">Red Velvet</option>
              <option value="carrot-cake">Carrot Cake</option>
              <option value="banana-bread">Banana Bread</option>
            </select>
            <textarea name="address" placeholder='YOUR ADDRESS'></textarea>
            <div className="buttons">
              <button type='submit' className='order-btn'>ORDER NOW</button>
              <button type='button' className='delivery-btn'>FREE DELIVERY</button>
            </div>
            <div className="bottom-text">
              <p>
                <span>WORKING HOURS:</span> MONDAY TO FRIDAY : 8:30AM - 10:30PM | SATURDAY : 9:00AM - 10:30PM | SUNDAY : <span>CLOSED</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Order;