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

ERRORS LECTURE

defensive programming
(guard against bad inputs)

NULL

exceptions
returning error codes

Debugging - reproducible; binary debugging (code complete 23.2)


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
