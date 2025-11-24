% Define primitive entities
male(william).
male(harry).
male(charles).
female(diana).

% Define family relationships
parent(diana, william).
parent(charles, william).
parent(diana, harry).
parent(charles, harry).

% Define derived predicates
father(X, Y) :- 
  parent(X, Y), male(X).
mother(X, Y) :- 
  parent(X, Y), female(X).

% Prolog definition of appending lists
append([X|Y],Z,[X|W]) :- 
  append(Y,Z,W).

append([],X,X).


human(socrates).
mortal(X) :- human(X).