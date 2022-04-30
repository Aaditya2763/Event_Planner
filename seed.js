const mongoose=require('mongoose');
const Event=require('./model/event')






const events=[
    {
eventTitle:"BirthDay Party",
eventDate:"12-05-2022",
eventStartTime:"8:00 PM",
eventEndTime:"12:00AM",
eventBackgroundCoverUrl:"https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjM0MDk4NHx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60",
eventDescription:"This is for the invitation for  Aditya's Birthday Party please come!"
},
{
eventTitle:"BirthDay Party",
eventDate:"12-05-2022",
eventStartTime:"8:00 PM",
eventEndTime:"12:00AM",
eventBackgroundCoverUrl:"https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjM0MDk4NHx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60",
eventDescription:"This is for the invitation for  Aditya's Birthday Party please come!"
}
]


async function SeedEvents(){
    await Event.deleteMany({});
    await Event.insertMany(events);
    console.log('Event seeded Successfully');
    console.log(events);


}




module.exports=SeedEvents;