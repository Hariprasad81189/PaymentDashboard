import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAngleDown, faBolt, faCircleQuestion, faMagnifyingGlass, faCookieBite, faUserFriends, faHouse, faRectangleList, faTableCellsLarge, faTruck, faVolumeHigh, faChartSimple, faCreditCard, faLocationArrow, faPercentage,    } from '@fortawesome/free-solid-svg-icons'

import './PaymentDashboard.css'
const PaymentDashboard =() =>{
    return(
        <div className='bg-container'> 

            <div className="navbar">
                <div className='navbar-top-con'>
                    <div className='image-name-container'>
                        <div className='image-name-left'>
                        <div className='image-container'>
                            Nishyan
                            <p className='name-tag'>HANDMADE WITH LOVE</p>
                        </div>
                        <div className='name-container'>
                            <p className='name'>Nishyan</p>
                            <p className='visit-store'>Visit Store</p>
                        </div>
                        </div>
                        <div>
                            <FontAwesomeIcon color='#ffffff' icon={faAngleDown} />
                        </div>
                    </div>

                    <div className='nav-items'>
                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faHouse} />
                        <p className='nav-item-heading'>Home</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faRectangleList} />
                        <p className='nav-item-heading'>Orders</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faTableCellsLarge} />
                        <p className='nav-item-heading'>Products</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faTruck} />
                        <p className='nav-item-heading'>Delivery</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faVolumeHigh} />
                        <p className='nav-item-heading'>Marketing</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faChartSimple} />
                        <p className='nav-item-heading'>Analytics</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faCreditCard} />
                        <p className='nav-item-heading'>Payments</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faLocationArrow} />
                        <p className='nav-item-heading'>Tools</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faPercentage} />
                        <p className='nav-item-heading'>Discounts</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faUserFriends} />
                        <p className='nav-item-heading'>Auidence</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faCookieBite} />
                        <p className='nav-item-heading'>Appearance</p>
                        </div>

                        <div className='icon-name-container'>
                        <FontAwesomeIcon color='#ffffff' icon={faBolt} />
                        <p className='nav-item-heading'>Plugins</p>
                        </div>

                    </div>
                </div>
                <div className='amount-container'>
                <div className='image-amount-container'>
                        <div className='amount-image-container'>
                        {/* icon */}
                        </div>
                        <div className='name-amount-container'>
                            <h1 className='name-amount'>Available Credits</h1>
                            <p className='amount'>221.10</p>
                        </div>

                    </div>


                </div>
            </div>



            <div className="payment-details">
                <div className='horizon-nav'>
                    <div className='horizon-nav-one'> 
                        <p className='payment-name'>Payments</p>
                        <FontAwesomeIcon color='#4D4D4D' icon={faCircleQuestion} />
                        <p className='payment-tag'>How its work</p>
                    </div>
                    <div className='horizon-nav-two'>
                        {/* <span className='search-icon'>
                        <FontAwesomeIcon color='#808080' icon={faMagnifyingGlass} />
                        </span> */}
                        <input className='input1' placeholder="Search features,tutorials, etc." type = "search"/>
                    </div>
                    <div className="horizon-nav-three">
                        <h1>icon</h1>
                        <h1>icon</h1>
                    </div>
                </div>

                <div className='payment-section'>
                    <div className='payment-section-overview'>
                        <div className='payment-section-calendar'>
                            <div>
                                <p className='overview-heading'>overview</p>

                            </div>
                            <div>
                                <p className='calendar'>Last month</p>
                            </div>

                        </div>
                        <div className='order-and-amout-recieved-container'>
                            <div className ='order-container'>
                                <p className='order-heading'>Online Orders</p>
                                <h1 className='amount-heading'>231</h1>

                            </div>
                            <div className='amount-container-horizon'>
                                <p className='order-heading'>Amount Received</p>
                                <h1 className='amount-heading'>23,91,312.19</h1>

                            </div>

                        </div>
                    </div>

                    <div className='transactions'>
                        <div className='trans'>
                            <p className='trans-heading'>Transcations</p>
                            <h1 className='trans-heading'>This month</h1>
                        </div>
                    </div>

                    <div className='transactions-list-container'>
                        <div className="search-and-sort-container">
                            <div>
                                <input type="search" placeholder='Search by order ID' />
                            </div>

                            <div className='sort-and-icons'>
                                <div className = 'sort-icon'>
                                    <p className='sort-heading'>Sort</p>
                                    <p>icon</p>
                                </div>
                                <div>
                                    <p>icon</p>
                                </div>
                               
                            </div>

                        </div>
                    </div>

                    <div className='order-details'>
                        <div>
                            <p className='order-heading'>Order ID</p>
                        </div>
                        <div><p className='order-heading'>Order Date</p></div>
                        <div><p className='order-heading'>Order Amount</p></div>
                        <div><p className='order-heading'>Transcation fee</p></div>

                    </div>

                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>

                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    
                    <div className='order-amount'>
                        <div>
                            <p className='orderid-heading'>#281209</p>
                        </div>
                        <div><p className='amount-heading'>7 July,2023</p></div>
                        <div><p className='amount-heading'>₹1278.23</p></div>
                        <div><p className='amount-heading'>₹22</p></div>
                    </div>
                    

                </div>

            </div>

        </div>
    );
};

export default PaymentDashboard;