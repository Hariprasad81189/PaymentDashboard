import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAngleDown, faBolt, faCircleQuestion, faUpDown, faDownload, faMagnifyingGlass, faCookieBite, faUserFriends, faHouse, faRectangleList, faTableCellsLarge, faTruck, faVolumeHigh, faChartSimple, faCreditCard, faLocationArrow, faPercentage,faCommentDots ,faCaretDown  ,faChevronLeft,faChevronRight, faWallet } from '@fortawesome/free-solid-svg-icons'
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
                        <FontAwesomeIcon fontSize={30} color='#ffffff' icon={faWallet} />
                        </div>
                        <div className='name-amount-container'>
                            <h1 className='nav-item-heading'>Available Credits</h1>
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
                        <div className='announcment-icon'>
                        <FontAwesomeIcon color='#4D4D4D' icon={faCommentDots} />
                        </div>
                        <div className='downarrow-icon'>
                        <FontAwesomeIcon color='#4D4D4D' icon={faCaretDown} />
                        </div>
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
                                <h1 className='amount-h1'>231</h1>

                            </div>
                            <div className='amount-container-horizon'>
                                <p className='order-heading'>Amount Received</p>
                                <h1 className='amount-h1'>23,91,312.19</h1>

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
                            <div className = 'sort-icon-con'>
                                    <p className='sort-heading'>Sort</p>
                                    <FontAwesomeIcon className='sort-icon'  color='#4D4D4D' icon={faUpDown} />

</div>
<div className='download-con'>
    <FontAwesomeIcon color='#4D4D4D' icon={faDownload} />
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

                    <div className='pages-container'>
                        <div className='previous'>
                            <FontAwesomeIcon fontSize={12} color='#4D4D4D' icon={faChevronLeft} />
                            <p className='previous-name'>Previous</p>

                        </div>
                        <div className='numbers'>
                            <div className='number-div'>1</div>
                            <div className='number-div'>...</div>
                            <div className='number-div'>11</div>
                            <div className='number-div'>12</div>
                            <div className='number-div'>13</div>
                            <div className='number-div'>14</div>
                            <div className='number-div'>15</div>
                            <div className='number-div'>16</div>
                            <div className='number-div'>17</div>
                            <div className='number-div'>18</div>
                            <div className='number-div'>19</div>

                        </div>
                        <div className='next'>
                        <p className='next-name'>Next</p>
                            <FontAwesomeIcon fontSize={12} color='#4D4D4D' icon={faChevronRight} />
                        </div>

                    </div>
                    

                </div>

            </div>



        </div>
    );
};

export default PaymentDashboard;