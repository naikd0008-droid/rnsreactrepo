import './rns.css'
import img1 from '../assets/rajesh kumar.jpg'
import img2 from '../assets/meera patel.jpg'
import img3 from '../assets/tanvi mehta.webp'
import { FaRegClock } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";




function Rns() {

  return (
    <>
    <div className='main'>
      <div className='top'>
            <div className='t1'>
              <b>My Orders</b>
            </div>
            <div className='t2'>
              <div className='tt1'>
                <button className='butt1'>All (3)</button>
                <button className='butt2'>Pending (1)</button>
                <button className='butt3'>In Progress (1)</button>
                <button className='butt4'>Completed (1)</button>
              </div>
              <div className='tt2'></div>
            </div>
        </div>
        <div className='bottom'>
            <div className='b1'>
              <div className='bb1'>
                <img src={img1} alt="" className='rajesh' />
              </div>
              <div className='bb2'>
                <div className='a1'><b>Rajesh Kumar</b></div>
                <div className='a2'>Birthday for Sneha Sharma</div>
                <div className='a3'> Happy Birthday to my amazing sister!Wishing you all the success.</div>
                <div className='a4'>₹5,000</div>
              </div>
              <div className='bb3'>
                <button className='button1'><FaRegClock/> Pending</button>
              </div>
            </div>
            <div className='b2'>
              <div className='bbb1'>
                <img src={img2} alt="" className='meerap' />
              </div>
              <div className='bbb2'>
                <div className='c1'><b>Meera Patel</b></div>
                <div className='c2'>Anniversary for Priya and Raj </div>
                <div className='c3'>Happy anniversary to the most beautiful couple!</div>
                <div className='c4'> ₹3,000</div>
              </div>
              <div className='bbb3'>
                <button className='button2'><FaRegClock/> In Progress</button>
              </div>
            </div>
            <div className='b3'>
              <div className='bbbb1'>
                <img src={img3} alt="" className='tanvi'/>
              </div>
              <div className='bbbb2'>
                <div className='d1'><b>Tanvi Mehta</b></div>
                <div className='d2'>Best Wishes for Amit Kumar</div>
                <div className='d3'>Good luck with your new venture! You will do amazing!</div>
                <div className='d4'>₹3,500</div>
              </div>
              <div className='bbbb3'>
                <div className='darshh'>
                    <button className='button5'><IoMdCheckmarkCircleOutline /> Completed</button>
                 </div>
                <div className='darshh1'>
                   <button className='button3'><LuEye /> Watch</button>
                  <button className='button4'><MdOutlineFileDownload /> Download</button>
                </div>
                </div>
              </div>
            </div>
        </div>
  
    
  
  
    </>
  )
}

export default Rns


