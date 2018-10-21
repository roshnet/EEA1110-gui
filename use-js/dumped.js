function complexMultiply(a, b, c, d){
    // (ac- bd) + j(ad + bc)
    var re_z1z2 = (a * c) - (b*d);
    var im_z1z2 = (a*d) + (b*c);
    var ans = [];
    ans.push(re_z1z2);
    ans.push(im_z1z2);
    return ans;
}




function isNum(key){
	if (isNaN(key.value) && key.value != '.'){
		alert("Only numbers allowed as input!");
		key.value = null;
	}
}










function calculate() {
	var target_zth_re = document.querySelector('[name="zth-polar-re"]').value;
	var target_zth_im = document.querySelector('[name="zth-polar-im"]').value;
	// target_zth_re.innerHTML(zth_re);
	// target_zth_im.innerHTML(zth_im);
	target_zth_re = zth_re;
}




/*
=================
DOCSTRINGS
==================
After filling out the last field, a function is called to check if all previous fields have been filled or not.
If they have been, then the calculated values can be inserted (to view as result) into the readonly fields.

*/






















function waste(){
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
	
}
/*

// var nr = (z1_re*z1_re*z2_re) - (z2_re*z2_re*z1_re) + (z1_re*z1_im*z2_im) + (z1_im*z2_re*z2_im);
// var dr = (z1_re+z2_re)*(z1_re+z2_re) + (z1_im+z2_im)*(z1_im+z2_im);
// var zth_re = (nr/dr) + z3_re;
// var nr_2 = (z1_re*z2_im*z2_re) + (z1_re*z1_re*z2_im) + (z1_im*z2_re*z2_re) - (z1_re*z1_im*z2_re);
// var zth_im = (nr_2/dr) + z3_im;

*/