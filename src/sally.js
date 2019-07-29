import React from 'react';

function Sally() {
  return (
    <div className="sally">
      <header className="header">
        <h1>Sally S. Student</h1>
        <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Sally"></img>
        
      </header>

        <main>
        <div className="sallyContact">
            <h2>Contact Information</h2>
            <address>1700 Lincoln St, Denver CO 80203<br/>
            <a href="mailto:SSSally@Smail.com"> SSSally@Smail.com</a><br/>
            <a href="tel:+303-555-5555">+303-555-5555</a>
            </address>
        </div>
        </main>
        <section>
      <h2>Education</h2>
        <ul>
          <li>Fort Collins High School: Aug 2012 - May 2016<br/>High School Diploma<br/></li>
          <li>Denver University: Aug 2016 - May 2019<br/>Computer Science BA</li>
        </ul>
    </section>
    <section>
      <h2>Previous Experience</h2>
        <ul>
          <li>Crew at Dairy Queen: Jun 2015 - Jul 2016<br/>
          neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo
          <br/></li>
          <li>IT Technician at Wells Fargo Bank: May 2019 - Present<br/>
          neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo</li>
        </ul>
    </section>
        
        </div>
    )
}

export default Sally;