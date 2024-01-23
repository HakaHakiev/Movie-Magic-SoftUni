const express = require("express");

const router = require("./routes");
const configHandlebars = require("./config/configHandlebars");
const configExpress = require("./config/configExpress");

const app = express();
const port = 3000;

configHandlebars(app);
configExpress(app);

app.use(router);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));

/* <div class="flip flip-vertical">
<div class="front">
  <img src="/img/the-little-mermaid.jpg" alt="The-Little-Mermaid" />
</div>
<div class="back">
  <h1>The Little Mermaid</h1>
  <h2>Genre: Fantasy</h2>
  <p>Description: The youngest of King Triton's daughters, Ariel is a
	beautiful and spirited young mermaid with a thirst for adventure.
	Longing to find out more about the world beyond the sea, Ariel visits
	the surface and falls for the dashing Prince Eric. Following her
	heart, she makes a deal with the evil sea witch, Ursula, to experience
	life on land.</p>
  <a href="#" class="details">Details</a>
</div>
</div>

<div class="flip flip-vertical">
<div class="front">
  <img src="/img/home-alone.jpeg" alt="Home-Alone" />
</div>
<div class="back">
  <h1>Home Alone</h1>
  <h2>Genre: Comedy</h2>
  <p>Description: It is Christmas time and the McCallister family is
	preparing for a vacation in Paris, France. But the youngest in the
	family, Kevin (Macaulay Culkin), got into a scuffle with his older
	brother Buzz (Devin Ratray) and was sent to his room, which is on the
	third floor of his house. Then, the next morning, while the rest of
	the family was in a rush to make it to the airport on time, they
	completely forgot about Kevin, who now has the house all to himself.
	Being home alone was fun for Kevin, having a pizza all to himself,
	jumping on his parents' bed, and making a mess. Then, Kevin discovers
	about two burglars, Harry (Joe Pesci) and Marv (Daniel Stern), about
	to rob his house on Christmas Eve. Kevin acts quickly by wiring his
	own house with makeshift booby traps to stop the burglars and to bring
	them to justice.</p>
  <a href="#" class="details">Details</a>
</div>
</div> */
