import React, { useEffect, useState } from "react"


function App() {
  const[eventName, setEventName] = useState('');
  const[dept, setDept] = useState('');
  const[events, setEvents] = useState([]);
  const[eventDate, setEventDate] =useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const event ={eventName,dept,eventDate};
    console.log(event);
    fetch("http://localhost:8085/event/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(event)
    }).then(()=>{
      console.log("New Event added");
      
    })

  }
  useEffect(()=>{
    fetch("http://localhost:8085/event/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setEvents(result);
    })
  },[])

  return (
    <div className="p-5 ">
      <div className='bg-sky-400 p-4'>
        <h1 className="text-3xl text-center font-serif">CLUB EVENT MANAGEMENT SYSTEM</h1>
      </div>
      <div className="font-serif text-2xl text-center my-5">
        <form  onSubmit={handleSubmit}>
          <div className="py-5">
            <label htmlFor="eventname" >Event Name : </label>
            <input type="text"
            className="border"
            placeholder="Enter the Event Name"
            value={eventName} 
            onChange={(e)=> setEventName(e.target.value)}/><br/>
          </div>

          <div className="py-5">
            <label htmlFor="eventname">Department : </label>
            <input type="text"
            className="border"
            placeholder="Enter your department"
            value={dept}
            onChange={(e)=> setDept(e.target.value)}/> <br/>
            </div>

            <div className="py-5">
            <label htmlFor="eventname">Event Date : </label>
            <input type="text"
            className="border"
            placeholder="Enter event date"
            value={dept}
            onChange={(e)=> setEventDate(e.target.value)}/> <br/>
            </div>
          <button 
          className="border rounded-sms bg-sky-400 px-5 my-4" 
          type='submit'
          onClick={handleSubmit}>
          Submit</button>
        </form>
      </div>
      <div className="my-5 font-serif text-4xl text-center">
        <h1>Events List</h1>
        <div>
          {events.map(event=>(
            <div className="border mx-100 text-2xl font-serif my-3 p-2" key={event.id}>
              Id : {event.id}<br/>
              Name : {event.eventName}<br/>
              Department : {event.dept}<br/>
              Event Date : {event.eventDate}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
