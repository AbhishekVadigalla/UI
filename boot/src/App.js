import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './color.css'
import veg from './Vegetable2.webp'
function App() {
  return (
    <div className='container-fluid'>
      <div style={{marginTop:'10px'}} className='header'>
      <div className='row'>
        <div class='col-8'>
          <div className='row'>
          <div class='col-2'>
          <p>Home</p>
        </div>
        <div class='col-2'>
          <p>BHAJIWALA</p>
        </div>
        <div class='col-2'>
          <p>ADMIN</p>
        </div>
        <div class='col-2'>
          <p>ABOUT</p>
        </div>
        <div class='col-2'>
          <p>CONTACT</p>
        </div>
          </div>
        
        </div>
        <div class='col-4'>
          <div className='row'>
          <div className='col-2'>
          <p>CART</p>
        </div>
        <div className='col-10'>
          <p>item : rs-0.00</p>
        </div> 
          </div>
        </div>
      </div>
      </div>
      <div className='content'>
        <div class='row'>
          <div>
            <img className='img' src={veg}/>
          </div>
        </div>
      </div>
      <div className='logininfo '>
        <div>
          <div>
          <h3>Login to your account</h3><br/>
          <p>Email<span style={{color:'red'}}>*</span></p>
          <input type='email' placeholder='abc123@gmail.com'/> <br/><br/>
          <p>Password<span style={{color:'red'}}>*</span></p>
          <input style={{marginTop:'-6px'}} type='text' placeholder='Password'/>
          <p style={{color:'blue',marginTop:'15px'}}>Forgot Password?</p>
          <button className='btn btn-secondary' >LOGIN</button>
          <p style={{marginTop:'20px'}}>Don't have an Account? <span style={{color:"blue"}}>Sign Up Now!!</span></p>
          </div>
          
        </div>
      </div> 
    </div>
  )
}

export default App;
