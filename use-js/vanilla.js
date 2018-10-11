

var z1 = z2 = z3 = [];
z1.push(document.querySelector('[name="z1-real"]'));
z1.push(document.querySelector('[name="z1-imag"]'));
z2.push(document.querySelector('[name="z2-real"]'));
z2.push(document.querySelector('[name="z2-imag"]'));
z3.push(document.querySelector('[name="z3-real"]'));
z3.push(document.querySelector('[name="z3-imag"]'));

// Real and imaginary parts of any impedance variable can be accessed by index 0 and 1 respectively.
// Hence, z1[0] refers to real part of z1, and z1[1] refers to its imaginary part.
// Same applies for 'z2' and 'z3'.


function isNum(key){
	if (isNaN(key.value) && key.value != '.'){
		alert("Only numbers allowed as input!");
		key.value = null;
	}
}




function appLogic() {
	// yet to build.
	return;
}

/*
=================
DOCSTRINGS
==================
After filling out the last field, a function is called to check if all previous fields have been filled or not.
If they have been, then the calculated values can be inserted (to view as result) into the readonly fields.

*/