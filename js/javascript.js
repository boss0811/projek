var eror=document.getElementById('eror');

function isClicked(){
	if(!nameVal()){
		return false;
	}
	else if(!typeVal()){
		return false;
	}
	else if(!qtyVal()){
		return false;
	}
	else if(!packageVal()){
		return false;
	}
	else if(!addressVal()){
		return false;
	}
	else if(!checkVal()){
		return false;
	}
	else{
		eror.innerHTML="";
		var pack;
		if(document.getElementById('reg').checked){
			pack="Regular";
		}
		else{
			pack="Special"
		}
		var display="Name: "+document.getElementById('name').value+"\n"+
					"Type: "+document.getElementById('type').value+"\n"+
					"Quantity: "+document.getElementById('qty').value+"\n"+
					"Package: "+pack+"\n"+
					"Address: "+document.getElementById('address').value+"\n";
		if(confirm(display)){
			if(prompt("Do you have additional message?")==""){
				alert('Your order has been accepted! Thank you!');
			}
			else{
				alert('Your message has been saved! Thank you!');
			}
		}			
		else{
			alert('Your order has been accepted! Thank you!');
		}
		document.getElementById('orderForm').reset();
	}
}

function nameVal(){
	var name=document.getElementById('name').value;
	if(name.length==0){
		eror.innerHTML="Name must not be empty!";
		return false;
	}
	else if(name.length<5||name.length>20){
		eror.innerHTML="Name length must be between 5 and 20!";
		return false;
	}
	return true;
}

function typeVal(){
	var type=document.getElementById('type').selectedIndex;
	if(type==0){
		eror.innerHTML="You have to choose type";
		return false;
	}
	return true;

}

function qtyVal(){
	var qty=document.getElementById('qty').value;
	if(!qty){
		eror.innerHTML="Quantity must not be empty!";
		return false;
	}
	else if (qty<1 || qty>10){
		eror.innerHTML="Quantity must be between 1 and 10";
		return false;
	}
	return true;
}

function packageVal(){
	var regular=document.getElementById('reg').checked;
	var spec=document.getElementById('spec').checked;
	if(!regular && !spec){
		eror.innerHTML="You have to pick the package!";
		return false;
	}
	return true;
}

function addressVal(){
	var address=document.getElementById('address').value;
	if(address.length==0){
		eror.innerHTML="Address must be filled!";
		return false;
	}
	return true;
}

function checkVal(){
	var cbox=document.getElementById('check').checked;
	if(!cbox){
		eror.innerHTML="You have to agree with the terms and conditions!";
		return false;
	}
	return true;
}