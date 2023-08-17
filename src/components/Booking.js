import React from 'react';
import vanisle from './vanisle.png';

 const Booking = () => {

  return (
    <div>
    <div className="container-fluid">        
       <h1>Booking</h1>
        <p>
          Consult the map below to find low-cost in-person mental health support near you. 
        </p>
    </div>
    <img src={vanisle} alt="Map of Vancouver Island"></img>
    <form action="/action_page.php">
      <label for="location">Choose your location:</label>
      <select name="location" id="location">
        <option value="Victoria">Victoria</option>
        <option value="Langford">Langford</option>
        <option value="Sydney">Sydney</option>
        <option value="Sooke">Sooke</option>
        <option value="Duncan">Duncan</option>
        <option value="Nanaimo">Nanaimo</option>
        <option value="Gulf Islands">Gulf Islands</option>
        <option value="Parksville">Parksville</option>
        </select>
        <br/><br/>
    </form>
    </div>
  
  )

}
 
export default Booking