const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
// const { v4: uuidv4 } = require('uuid');

// Pilih view engine 
app.set('view engine', 'ejs');

// Cara pakai body parser
app.use(bodyParser.urlencoded({extended: true}));

// Kalai mau ngirim static data, misal img,css,dan js
app.use(express.static('public'));

let defaultID = 2;

let todoList = [
	{
		id : 1,
		todo : "eat"
	},
	{
		id : 2,
		todo : "sleep"
	},

]

// Default router
app.get('/', (req, res) => {
   res.render("index.ejs", {todoList : todoList});
});

// Route for addtodo
app.post("/newtodo", (req,res)=>{
	console.log('todo submitted');

	// Ambil data yang diinput
	let item =  req.body.item;

	// Push ke todolist
	if(item !== ""){
		defaultID++;
		todoList.push({
			id : defaultID,
			todo : item
		});
	}

	// Redirect ke default router;
	res.redirect("/");
})

app.post("/deleteItem", (req,res)=>{
	const deletedItemID = parseInt(req.body.value, 10);

	todoList = todoList.filter(e=>{
		return e.id !== deletedItemID;
	})

	console.log(todoList);

	// Redirect ke default router;
	res.redirect("/");
})


// Router untuk link yang lain 
app.get('*', (req, res) => {
   res.send('<h1>404 PAGE NOT FOUND</h1>');
});


// Listen to a port 
app.listen(PORT);