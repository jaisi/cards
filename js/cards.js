console.log("i am here");

var ta = document.getElementById("ta");
var btn = document.getElementById("create");
var count = 0;
btn.addEventListener("click", handleAddCard);

function handleAddCard(event){
	if (ta.value){
		count++;
		console.log("count",count);

	
		var cardBlock = `
        <section class="card">
          <h3>Card 1</h3><br>
          <h3>
            Chillwave umami williamsburg, ethical meditation fashion axe 8-bit neutra hammock raclette woke.
            Celiac listicle slow-carb, nisi irure mollit labore keytar pop-up pork belly tofu. 
            Food truck mollit authentic banh mi YOLO kale chips. Air plant seitan cardigan chicharrones typewriter woke.
          <h3>
          <p><button id="del--${count}">Delete</button></p>
        </section>
        `;
        
		var addDiv = document.createElement("div");
		addDiv.innerHTML = cardBlock;
		addDiv.setAttribute("id",`div--${count}`);
		document.getElementById("stickItHere").appendChild(addDiv);
		


		var del = document.getElementById(`del--${count}`);
		del.addEventListener("click", handleDel);

		function handleDel(event){
			console.log("within handleDel function", del);
			console.log("event",event.target.closest("div"));
			event.target.closest("div").remove();
			

			
		}
	}

}


