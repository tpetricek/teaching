male(william).
male(harry).
male(charles).

female(diana).

parent(diana, william).
parent(charles, william).
parent(diana, harry).
parent(charles, harry).

father(X, Y) :- parent(X, Y), male(X).
mother(X, Y) :- parent(X, Y), female(X).

append([X|Y],Z,[X|W]) :- append(Y,Z,W).
append([],X,X).
