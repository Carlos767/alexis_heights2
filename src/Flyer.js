import React, { Component } from "react";
{/*import Image from 'react-bootstrap/Image'*/}
 
class Flyer extends Component {
  render() {
    return (
      <div className="container">
        {/* <div className="row">
        <Image src="../public/assets/images/foodS.png/100px250" fluid />
    </div> */}
        <div className="row">
          <h2>Alexis Heights Neighbor Food Bank</h2>
          <p>Your Alexis Heights Board of Directors recognize many in our community are struggling
          during these uncertain economic times, and wish to help out! Many are finding it difficult 
          to feed themselves or their families with uncertainty what the future brings. The Board has 
          arranged a small Food Supply within the community to assist those in need. If you or your family 
          are in need of immediate food assistance, or know of a neighbor in need, please, let us know using
          the contact form on this page.</p>
          <br></br>
          <h3>Contact us through:</h3>
          <ul>
            <li>Email: alheoffice@gmail.com</li>
            <li>Phone: 702-737-8580</li>
            <li>Online: alexisheights.com</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Flyer;