console.log("i am here");

var ta = document.getElementById("ta");
var btn = document.getElementById("create");
var count = 0;
btn.addEventListener("click", handleAddCard);

function handleAddCard(event){
	if (ta.value){
		count++;
		console.log("count",count);

	
		var cardBlock = `<div id="${count}">
        <section class="card">
          <h3>Card 1</h3>
          <p>
            Chillwave umami williamsburg, ethical meditation fashion axe 8-bit neutra hammock raclette woke. Celiac listicle slow-carb, nisi irure mollit labore keytar pop-up pork belly tofu. Food truck mollit authentic banh mi YOLO kale chips. Air plant seitan cardigan chicharrones typewriter woke.
          </p>
          <p><button id="del--${count}">Delete</button></p>
        </section></div>
        `;

		var addDiv = document.createElement("div");
		addDiv.innerHTML = cardBlock;
		addDiv.setAttribute("id",`div--${count}`);
		document.getElementById("stickItHere").appendChild(addDiv);

		var del = document.getElementById(`del--${count}`);
		del.addEventListener("click", handleDel);

		function handleDel(event){
			console.log("within handleDel function");
			var parent = event.target.parentNode;
			var gparent = parent.parentNode;
			var ggparent = gparent.parentNode;
			
			console.log("parent", parent);
			console.log("gparent", gparent);
			console.log("ggparent", ggparent);
			
			ggparent.removeChild(gparent);

			
		}
	}

}


