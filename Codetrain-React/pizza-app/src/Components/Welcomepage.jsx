import React, { Component } from 'react'

class Welcomepage extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{marginTop: '30px'}}>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <img src="../src/Images/pizza1.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <h5 className="card-title" style={{ fontSize: '50px', color: 'darkred' }}>Welcome To:</h5>
            <h2 style={{ textAlign: 'center', color: 'darkred', fontWeight: 'bolder', fontSize: '70px' }}>Marie's Pizza</h2>
            <p className="card-text text-center">Your No.1 choice when it comes to satisfying your cravings for Pizza</p>
            <small className="text-body-secondary"></small>
            <p className="card-text">
              🌐 Explore Our Menu:
              Take a moment to explore our diverse menu, featuring a variety of pizza styles, toppings, and specialty creations. Whether you crave a classic Margherita, a meat-lover's dream, or a veggie delight, we've got the perfect pizza for every palate. And don't forget to check out our mouthwatering sides and refreshing beverages to complete your meal.
            </p>
            <h6>🌟 Why Choose Marie's Pizza ?</h6>
            <p>Freshness Guaranteed: Our ingredients are handpicked to ensure the freshest and finest quality, because when it comes to pizza, freshness is key!</p>
            <p>Diverse Flavors: From classic Margheritas to bold BBQ Chicken, we've got a pizza for every palate. Explore our menu and embark on a journey of taste bud ecstasy.</p>
            <p>Custom Creations: Be your own pizza maestro! Create your personalized masterpiece with our build-your-own pizza options. Choose your crust, sauce, cheese, and toppings to craft the pizza of your dreams.</p>
            <p>Speedy Delivery: Craving a pizza fix ASAP? We've got you covered with our swift and reliable delivery service. Hot, fresh, and straight to your door.</p>
            <p>Exclusive Deals: Enjoy great savings with our special deals and promotions. Because at [Your Pizza Place], we believe in making your pizza experience not only delicious but affordable too.</p>
            <p>Feel the anticipation rise as you explore our website, and get ready for a pizza experience like no other. Whether you're a solo pizza enthusiast, planning a family feast, or hosting a party, [Your Pizza Place] is here to turn your pizza fantasies into a reality.</p>
            <p>So, what are you waiting for? Dive into a world of cheesy goodness, tantalizing flavors, and pizza perfection. Welcome to [Your Pizza Place] – Where Every Slice Tells a Story! 🍕✨</p>
          </div>
        </div>
      </div>

    )
  }
}

export default Welcomepage
