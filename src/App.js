//import logo from './logo.svg';
import './App.css';
import a2z from "./a2z.jpg";
import lifestyle from "./lifestyle.gif";
import Goal from "./Goal.gif";
import market from "./market.png";
//import App2 from "./RJS/hello-world/src/App.js";

function App() {
  return (
    <div className="App">
      <div>
	  <header className="App-header1">
        <img className="App-img1"  align="left" src={a2z} alt="logo" width="90px" height="50px"/>
        <div className='isearch'><input type="text" class='search' name="text" value="search.."></input>
        <input type="submit" name="submit" class="submit" value="Search"/></div>
        <div className="top"><a className='headlink' href='http://localhost:3000/a2zlearning_home' ><h3 className="headattri">HOME</h3></a></div>
        <div className="top"><a className='headlink' href='https://sanjai024.github.io/about_us/' ><h3 className="headattri">About us</h3></a></div>
        <div className="top"><a className='headlink' href='https://sanjai024.github.io/about_us/' ><h3 className="headattri">Know more</h3></a></div>
        <div className="top"><a className='headlink' href='#footer' ><h3 className="headattri">contactUs</h3></a></div>
      </header>
  <div class="content">
	<table><tr><td height="90px"></td></tr></table>
  <table  >
      <tr><td class="head" width="1300px" height="70px" ><font size="20"><b>About Us</b></font></td></tr>
    </table>
  <table align="center" >
  <tr>
	<td><img src={Goal} alt="img" height="350px" width="500px"></img></td>
	<td width="100px"></td>
	<td height="250px" width="500px" ><font size="30" ><center><b>Our Mission</b></center></font>
	<font size="4" >&emsp;&emsp;&emsp;We share knowledge in the world .we improve lives through learning , as a global destination for online learning ,we connect people through knowledge</font></td>
   </tr>
</table>
<br></br>
<br></br>
<br></br>
<table align="center" >
  <tr>
	
	<td height="250px" width="500px" ><font size="30" ><center><b> Our Marketplace</b></center></font>
	<font size="4" >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The mission is to improve lives through learning,we encourage everyone can utilize their expertise or knowledge to create and share education through Instructors, tutors, teachers and to enroll in this education to learn for Students, learners…</font></td>
	<td width="100px"></td>
	<td><img src={market} alt="img" height="350px" width="500px"></img> </td>   </tr>
</table>
<br></br>
<br></br>

<br></br>
<table align="center" >
  <tr>
	<td><img src={lifestyle} alt="img" height="350px" width="500px"></img> </td>   
	<td width="100px"></td>
	<td height="250px" width="500px" ><font size="30" ><center><b> Transformation Lives</b></center></font>
	<font size="4" >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; A learner's interpretation of the experience creates meaning, which leads to a change in the behavior, mindset, and beliefs.The innovative application of technologies that creates new paradigms for corporate training and learning in general.</font></td>
	</tr>
</table>
</div>
<table class="head">
	<tr >
	<div className="sz"><td><img src="https://about.udemy.com/wp-content/uploads/2022/01/gofundme.png" alt="img" height="100px" width="200px"></img></td></div>
	<div className="sz"><td><img src="https://about.udemy.com/wp-content/uploads/2021/07/Kaiser-logo-grey.png" alt="img" height="80px" width="200px"></img></td></div>
	<div className="sz"><td><img src="https://about.udemy.com/wp-content/uploads/2021/07/Tata_logo.png" alt="img" height="100px" width="200px"></img></td></div>
	<div className="sz"><td><img src="https://about.udemy.com/wp-content/uploads/2021/07/box_logo.png" alt="img" height="80px" width="100px"></img></td>&emsp;&emsp;</div>
	</tr>
</table>
<footer id="footer">
<table>
<tr>
<td width="800px" height="5px" colspan="4"></td>
</tr>
<tr >
	<td height="200px" width="300px" align="center"><ul ><li>A2Z business</li><br/>
		<li> Teach on A2Z</li><br/>
		<li>Get The App</li><br/>
		<li><a text-decoration="none" color="black" href="www.google.com"> About Us</a></li><br/>
		<li>Investors</li><br/>

</ul></td>
	<td height="200px" width="300px" align="center"><ul ><li>Carrer</li><br/>
		<li> Blog</li><br/>
		<li>Help</li><br/>
		<li>Affiliate</li><br/>
		<li>Accessibility</li><br/>

</ul></td>
	<td height="200px" width="300px" align="center"><ul ><li>Terms</li><br/>
		<li> Privacy policy and cookie policy</li><br/>
		<li>Topics/concepts</li><br/>
		<li>sitemap</li><br/>
		<li>Feautures</li><br/>

</ul></td>	
	<td height="200px" width="300px" align="center"><ul ><li>Follow US</li><br/>
		<li> <img src="https://th.bing.com/th/id/R.452b8e3834210547e3c5271045aa5a3c?rik=GHbiBgobtkHwUg&riu=http%3a%2f%2foldbrashiers.org%2fwp-content%2fuploads%2f2019%2f01%2ffacebook-icon-black-and-white-21.png&ehk=DSszNlNrlWkFGnklIhtCkYp5OePgdxuXt3FJ4lMoU7w%3d&risl=&pid=ImgRaw&r=0" alt="img" height="15px" width="15px"></img>&ensp;Facebook</li><br/>
		<li><img src="https://cdn-icons-png.flaticon.com/512/37/37405.png?w=740&t=st=1671602440~exp=1671603040~hmac=88e7e3e6ccdf296cba706fbf8af0db43e5e033449b7ff9610864ab34ae01efff" alt="img" height="12px" width="12px" />&ensp;Instagram</li><br/>
		<li><img src="https://cdn-icons-png.flaticon.com/512/1051/1051333.png?w=740&t=st=1671602587~exp=1671603187~hmac=53b2d620088402129c29b4b55160e8fbb884dd0b1fc338d38eb96dc3fc505bbd" alt="img" height="12px" width="12px" />&ensp;Linkedin</li><br/>
		<li><img src="https://cdn-icons-png.flaticon.com/512/39/39552.png?w=740&t=st=1671602333~exp=1671602933~hmac=a740faeb1588c9431205086bef279f7a19cb3493b6260e128dd8de74c640e609" alt="img" height="12px" width="12px" />&ensp;Twitter</li><br/>

</ul></td>
</tr>
</table>
</footer>
</div>
  </div>
  );
}

export default App;
