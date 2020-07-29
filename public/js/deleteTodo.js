const todoList = document.querySelectorAll('.todo-list li');


todoList.forEach(li=>{
	li.addEventListener("dblclick",async (e)=>{

		const value = e.target.id ;

		await fetch("/deleteItem",
		{
		    method: "POST",

		    // whatever data you want to post with a key-value pair
		    body: `value=${value}`,
		    headers: 
		    {
		        "Content-Type": "application/x-www-form-urlencoded"
		    }

		}).then((response) => 
		{ 
		  window.location.replace("/");
		});
	})
})
