// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './PaymentDashboard.css'
const PaymentDashboard =() =>{
    return(
        <div className='bg-container'> 

            <div className="navbar">
                <div className='image-name-container'>
                    <div className='image-container'>
                        Nishyan
                        <p className='name-tag'>HANDMADE WITH LOVE</p>

                    </div>
                    <div className='name-container'>
                        <h1 className='name'>Nishyan</h1>
                        <p className='visit-store'>Visit Store</p>
                    </div>

                    <div >
                    {/* <i class="fa-solid fa-angle-down"></i> */}

                    </div>
                </div>

                <div className='nav-items'>
                    <div className='icon-name-container'>
                    {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
                    <p>Home</p>


                    </div>
                </div>


            </div>

            <div className="payment-details">
                <h1>Hi</h1>
                {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            </div>

            
        </div>
    );
};

export default PaymentDashboard;