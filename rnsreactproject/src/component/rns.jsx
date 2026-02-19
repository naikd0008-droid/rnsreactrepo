import './rns.css'
import img1 from '../assets/rajesh kumar.jpg'
import img2 from '../assets/meera patel.jpg'
import img3 from '../assets/tanvi mehta.webp'


function Rns() {

  return (
    <>
    <div className='main'>
      <div className='main1'>
        <div className='top'>
          <div className='topleft'> Back to Home</div>
          <div className='topright'></div>
        </div>
        <div className='middle'>
            <div className='t1'>
              My Orders
            </div>
            <div className='t2'>
              <div className='tt1'></div>
              <div className='tt2'></div>
              <div className='tt3'></div>
              <div className='tt4'></div>
            </div>
        </div>
        <div className='bottom'>
            <div className='b1'>
              <div className='bb1'>
                <img src={img1} alt="" className='rajesh' />
              </div>
              <div className='bb2'>
                <div className='a1'>Rajesh Kumar</div>
                <div className='a2'>Birthday for Sneha Sharma</div>
                <div className='a3'> Happy Birthday to my amazing sister!Wishing you all the success.</div>
                <div className='a4'>₹5,000</div>
              </div>
              <div className='bb3'></div>
            </div>
            <div className='b2'>
              <div className='bbb1'>
                <img src={img2} alt="" className='meerap' />
              </div>
              <div className='bbb2'>
                <div className='c1'>Meera Patel</div>
                <div className='c2'>Anniversary for Priya and Raj </div>
                <div className='c3'>Happy anniversary to the most beautiful couple!</div>
                <div className='c4'> ₹3,000</div>
              </div>
              <div className='bbb3'></div>
            </div>
            <div className='b3'>
              <div className='bbbb1'>
                <img src={img3} alt="" className='tanvi'/>
              </div>
              <div className='bbbb2'>
                <div className='d1'>Tanvi Mehta</div>
                <div className='d2'>Best Wishes for Amit Kumar</div>
                <div className='d3'>Good luck with your new venture! You will do amazing!</div>
                <div className='d4'>₹3,500</div>
              </div>
              <div className='bbbb3'>
                <button className='but1'></button>
                <button className='but2'></button>
              </div>
            </div>
        </div>
        </div>
    </div>
  
  
    </>
  )
}

export default Rns


