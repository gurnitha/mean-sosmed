// backend/controllers/testController.js

const test_api = async function(req,res){
	res.status(200).send({message:'Response Guys ...'});
}

module.exports = {
	test_api
}

