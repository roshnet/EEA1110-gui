# thevenin.py
# Haider Ali

import math


z1_re= int(input())  #takes real part of z1
z1_im= int(input())  #takes imaginary part of z1
z2_re= int(input())  #takes real part of z2
z2_im= int(input())  #takes imaginary part of z2
z3_re= int(input())  #takes real part of z3
z3_im= int(input())  #takes imaginary part of z3
v1= int(input())     #takes supply voltage(volts)


# zth= (z1*z2 + z2*z3 + z3*z1)/(z1 + z3)


def calc_Zth():
    a_re= (z1_re)*(z2_re) - (z1_im)*(z2_im)  #real part of z1*z2
    a_im= (z1_re)*(z2_im) - (z1_im)*(z2_re)  #imaginary part of z1*z2
    b_re= (z2_re)*(z3_re) - (z2_im)*(z3_im)  #real part of z2*z3
    b_im= (z2_re)*(z3_im) - (z2_im)*(z3_re)  #imaginary part of z2*z3
    c_re= (z3_re)*(z1_re) - (z3_im)*(z1_im)  #real part of z3*z1
    c_im= (z3_re)*(z1_im) - (z3_im)*(z1_re)  #imaginary part of z3*z1
    d_re= (z1_re + z3_re)  #real part of z1+z3
    d_im= (z1_im + z3_im)  #imaginary part of z1+z3
    x= a_re + b_re + c_re  #real part of z1*z2 + z2*z3 + z3*z1
    y= a_im + b_im + c_im  #imaginary part of z1*z2 + z2*z3 + z3*z1
    zth_re= ((x*d_re + y*d_im)/(d_re*d_re + d_im*d_im))  #real part of Zth
    zth_im= ((y*d_re - x*d_im)/(d_re*d_re + d_im*d_im))  #imaginary part of Zth 

    #calc_Vth(d_re, d_im)
    #pol_Zth(zth_re, zth_im)

# Vth= (v1*z3)/(z1 + z3)


def calc_Vth(p, q):  #p-->real part of z1+z3 & q-->imag. part of z1+z3
    vth_re= v1*((p*z3_re + q*z3_im)/(p*p + q*q))  #real part of Vth
    vth_im= v1*((p*z3_im - q*z3_re)/(p*p + q*q))  #imaginary part of Vth

    #pol_Vth(vth_re, vth_im)

def pol_Zth(a, b):
    s1= a*a + b*b
    polar_zth= sqrt(s)  #gives magnitude of Zth
    tan1= b/a  #tan of angle subtended by Zth
    angle_zth= math.degrees(math.atan(tan))  #angle subtended by Zth in degrees

def pol_Vth(i, j):
    s2= i*i + j*j
    polar_vth= sqrt(s)  #gives magnitude of Vth
    tan2= j/i  #tan of angle subtended by Vth
    angle_vth= math.degrees(math.atan(tan))  #angle subtended by Vth in degrees


#calc_Zth()
    

