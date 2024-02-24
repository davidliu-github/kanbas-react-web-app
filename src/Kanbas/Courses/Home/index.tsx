import ModuleList from "../Modules/List";

function Home() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{flexGrow: '1'}}>
      <h2>Home</h2>
      <ModuleList />
      </div>
      <div>
      <h2>Status</h2>
      <button>Unpublish</button>
                        <button>Published</button>
                        <ul>
                            <li><a href="">Import Existing Content</a></li>
                            <li><a href="">Import From Commons</a></li>
                            <li><a href="">Choose Home Page</a></li>
                            <li><a href="">View Course Stream</a></li>
                            <li><a href="">New Announcement</a></li>
                            <li><a href="">New Analytics</a></li>
                            <li><a href="">View Course Notifications</a></li>
                        </ul>
                        <h3>Comming Up</h3>
                        <li><a href="">View Calendar</a></li>
                        <ul>
                            <li><a href="">Lecture CS 4550.12631.202410 Sep 7 at 11:45am</a></li>
                            <li><a href="">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
                            <li><a href="">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
                        </ul>
      </div>
    </div>
  );
}
export default Home;