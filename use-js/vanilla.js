
// Global variables..
var z1_re = document.querySelector('[name="z1-real"]');
var z1_im = document.querySelector('[name="z1-imag"]');
var z2_re = document.querySelector('[name="z2-real"]');
var z2_im = document.querySelector('[name="z2-imag"]');
var z3_re = document.querySelector('[name="z3-real"]');
var z3_im = document.querySelector('[name="z3-imag"]');

// Shorthand variables..
var a1 = z1_re;
var b1 = z1_im;
var a2 = z2_re;
var b2 = z2_im;
var a3 = z3_re;
var b3 = z3_im;


// Logic for Thevenin's Impedance..

var zth_re_nr = ((a1*a3) - (b1*b3))*(a1+a3) + (b1+b3)*((a1*b3)+(a3*b1)) ;

var zth_dr = (a1+a3)*(a1+a3) + (b1+b3)*(b1+b3) ;

var zth_im_nr = (((a1*b3)+(a3*b1))*(a1+a3)) - ((b1+b3)*((a1*a3)-(b1*b3)))
var zth_re = (zth_re_nr / zth_dr) + a2 ;
var zth_im = (zth_im_nr / zth_dr) + b2 ;

var zth_mag = Math.sqrt((zth_re*zth_re) + (zth_im*zth_im));
var zth_angle = (Math.atan(zth_im / zth_re)) * 180/ 3.14 ; // converted to degrees..


// Logic for Thevenin's voltage..

var 