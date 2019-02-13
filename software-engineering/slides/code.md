- title : Software Engineering: Understanding requirements
- description : Software Engineering: Understanding requirements
- author : Tomas Petricek
- theme : simple
- transition : none

****************************************************************************************************

# **CO886: Software Engineering**<br/> Understanding requirements

<br /><br />
<br /><br /><br />

**Tomas Petricek**

email: [t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk)<br />
twitter: [@tomaspetricek](http://twitter.com/tomaspetricek)<br />
office: [S129A](https://www.cs.kent.ac.uk/rooms/S129A.gif)<br />

****************************************************************************************************

CODE QUALITY LECTURE

consistent naming
descriptive naming
too long, too short
scope (for i is fine in short code)
domain specific names - mathematics

ordering statements in a sensible way
(see Figure 1)

if (cond) return true; else return false;

goto

how long routine is too long? (code complete 7.5)

avoid too much nesting

proper indentation

REFACTORING
semantics preserving transformation improving quality
when to do refactoring in TDD!

ENSURING QUALITY

code reviews
pair programming
style checking tools / linters


****************************************************************************************************

Fig 1

MarketingData marketingData;

SalesData salesData;

TravelData travelData;



travelData.ComputeQuarterly();

salesData.ComputeQuarterly();

marketingData.ComputeQuarterly();



salesData.ComputeAnnual();

marketingData.ComputeAnnual();

travelData.ComputeAnnual();



salesData.Print();

travelData.Print();

marketingData.Print();
