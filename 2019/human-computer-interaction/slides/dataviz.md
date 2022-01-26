- title : Human Computer Interaction: Data visualization
- description : Human Computer Interaction: Data visualization
- author : Tomas Petricek
- theme : simple
- transition : none
  
****************************************************************************************************

# **CO582: Computer Interaction and User Experience**<br/> Data visualization

<br /><br />
<br /><br /><br />

**Tomas Petricek**

email: [t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk)<br />
twitter: [@tomaspetricek](http://twitter.com/tomaspetricek)<br />
office: [S129A](https://www.cs.kent.ac.uk/rooms/S129A.gif)<br />

****************************************************************************************************
 - class: part
 
# **Data science and data visualization**

----------------------------------------------------------------------------------------------------

# **Data age 2025**: What sort of data is there?

_<i class="fa fa-crown"></i>_ Open data collected by governments, e.g. [data.gov.uk](http://data.gov.uk)

_<i class="fa fa-user-secret"></i>_ Not so open data collected by governments

_<i class="fa fa-users"></i>_ Social networks and other user data

_<i class="fa fa-briefcase"></i>_ Data collected by businesses or scientists

_<i class="fa fa-video"></i>_ Multimedia data such as photos, videos, books

_<i class="fa fa-microchip"></i>_ Devices, sensors and internet of things

----------------------------------------------------------------------------------------------------

# **Data age 2025**: The growth of the global datasphere

<img src="images/dataviz/datagrowth.png" class="nb" />

----------------------------------------------------------------------------------------------------

# **Data age 2025**: The growth of the global datasphere

<img src="images/dataviz/datagrowth-note.png" class="nb" />

----------------------------------------------------------------------------------------------------

# **Data visualization**: What is the goal?

> _The goal is to_ aid our understanding _of data by  
> leveraging the human visual system's ability to_  
> see patterns, spot trends _and_ identify outliers.

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/circos.png" class="nb" style="height:520px;float:left; margin-right:30px" />

Scientific data visualization

<div style="margin-top:30px">

_Helping experts make sense of complex data_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/nyt.png" class="nb" style="height:500px;float:left; margin-right:30px" />

Telling stories with data in media

<div style="margin-top:30px">

_Make data and facts more accessible_

</div>

----------------------------------------------------------------------------------------------------

# **Data visualization**: How is it a HCI problem?

**Understanding user needs**

 - Easy for novices or rich for experts?
 - Trigger a surprise or be neutral?
 - Is the goal exploration or explanation?
 
<div class="fragment">

**Using user experience methods**

 - Using perception and cognitive theories
 - Empirical testing in controlled setting

</div>
<div class="fragment">

**Do people care about understanding data?**

</div>

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/guardian.png" class="nb" style="height:520px;float:left; margin-right:30px" />

_I think that the people of this country have had enough of experts..._

<div style="margin-top:30px" class="fragment">

Can good visualization get people interested in data?

</div>

****************************************************************************************************
 - class: part
 
# **How data visualizations work**

----------------------------------------------------------------------------------------------------

# **Data visualization**: What is a visualization?

> _Principled mapping of_ data variables _to_ visual  
> features _such as position, shape, size and color_.

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/co2bar.png" class="nb" style="height:500px;margin:30px 30px 0px 0px;float:left" />

_What are the variables?_

What visual features?

_What tasks does it enable?_

Could perception mislead us?

----------------------------------------------------------------------------------------------------

## **Form follows function**

<img src="images/dataviz/bauhaus.jpg" style="width:770px;margin-top:-20px" />
 
----------------------------------------------------------------------------------------------------

# **Design principles**

**Form follows function**

- Find the best mapping from variables to features
- Considering human perception properties
- Is there objectively best visualization?

<div class="fragment">

**Beyond conveying facts**

- Visualizations with less straightforward goals
- Trigger emotions, convey complexity, have fun

</div>

****************************************************************************************************
 - class: part
 
# **Systematic visualization design**

----------------------------------------------------------------------------------------------------
 - class: part
 
# **Part I**: Data types

----------------------------------------------------------------------------------------------------

# **Systematic visualization**: Data types

<img src="images/dataviz/types.png" style="float:right;width:200px;margin-right:40px" class="nb" />

**Types of data attributes**

 - Categorical _(e.g. countries, people)_
 - Ordinal _(e.g. education level)_
 - Quantitative _(e.g. time, money, distance)_

<div class="fragment">
<img src="images/dataviz/ordering.png" style="float:right;width:200px;margin-right:40px" class="nb" />
 
**Types of quantitative scales**

 - Sequential _(e.g. only positive values)_
 - Diverging _(e.g. price change)_
 - Cyclic _(e.g. month, time of day)_

</div><div class="fragment">

More types are maps, hierarchies and networks 

</div>

----------------------------------------------------------------------------------------------------
 - class: part
 
# **Part II**: Visual channels

----------------------------------------------------------------------------------------------------

# **Systematic visualization**: Categorical channels

**Cannot be measured and ordered** 

_Categories represented as shapes_

<img src="images/dataviz/catchan1.png" class="nb" style="width:500px; margin:0px 0px 0px 50px"/>

<div class="fragment">

_Categories represented as colors_

<img src="images/dataviz/catchan2.png" class="nb" style="width:500px; margin:0px 0px 0px 50px"/>

</div>

----------------------------------------------------------------------------------------------------

# **Systematic visualization**: Magnitude channels

<img src="images/dataviz/magnitude.png" style="float:right;width:120px;margin-right:100px" class="nb" />

**Can compare and guess distance**

 - _Position on common scale_
 - _Position on separate scale_
 - _Length of an element_
 - _Angle of rotation_
 - _Area in 2D space_
 - _Color luminance or saturation_

----------------------------------------------------------------------------------------------------
 - class: part

# **EXAMPLES**: Mapping data to channels

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/gapminder.png" class="nb" style="width:600px;float:left;margin:30px 50px 0px 0px" />

<div class="fragment">

X position  
_GDP (quantitative)_

</div><div class="fragment">

Y position  
_Age (quantitative)_

</div><div class="fragment">

Bubble size  
_Pop. (quantitative)_

</div><div class="fragment">

Bubble color  
_Cont. (categorical)_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/co2compare.png" class="nb" style="width:620px;float:left;margin:0px 20px 0px 0px" />

<div class="fragment">

X position  
_Country (category)_

</div><div class="fragment">

Y position  
_CO2 (quantitative)_

</div><div class="fragment">

Bar color / offset 
_Year (category)_

</div>

----------------------------------------------------------------------------------------------------
 - class: part
 
# **Part III**: Perception properties

----------------------------------------------------------------------------------------------------

# **Perception**: How to use color

**Can encode categories and magnitudes**

<img src="images/dataviz/hsl.png" class="nb" style="height:200px;margin:-10px 0px 10px 20px"/>
<div class="fragment">

**How to use it correctly**

 - Choose **distinguishable** categorical colors 
 - Use linear scale that is perceived **linearly**
 
</div>

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/colourblind.jpg" class="nb" style="width:730px;float:left;" />

_<br />Choose<br/> colors that colorblind people can distinguish!_

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/luminance.png" class="nb" style="width:600px;float:left;" />

_Use luminance scale that is perceived as linear!_

<div style="clear:both;height:20px"></div>
<img src="images/dataviz/rainbow.png" class="nb" style="width:600px;float:left" />

_Rainbow can model magnitude (but not linear by default) or categories._

----------------------------------------------------------------------------------------------------

# **Perception**: Choosing channels

### Can we estimate relative values in charts?

 1. _Aligned on common scale_
 2. _Unaligned on common scale_
 3. _Length encoding _
 4. _Angles_
 5. _Circular areas_
 6. _Rectangular areas_

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/area.png" class="nb" style="width:700px;float:left;margin-right:20px" />

**Position**  
_(+/- 2x)_

**Length**  
_(+/- 3x)_

**Angles**  
_(+/- 5x)_

**Areas**  
_(+/- 6x)_

----------------------------------------------------------------------------------------------------
 - class: part
 
# **Part IV**: Task analysis

----------------------------------------------------------------------------------------------------

#  **Systematic visualization**: Task analysis

**Data analytical task (high-level)**
  
_<i class="fa fa-eye"></i> Discover new hypothesis_  
_<i class="fa fa-highlighter"></i> Present some discovery_
   
<div class="fragment">

**Nature of search (mid-level)**
 
_<i class="fa fa-crosshairs"></i> Lookup (know where) or locate (know what)_  
_<i class="fa fa-arrows-alt"></i> Browse general area of interest_

</div><div class="fragment">
   
**Querying of data points (low-level)**

_<i class="fa fa-mouse-pointer"></i> Identify information about data point_  
_<i class="fa fa-sliders-h"></i> Compare multiple data points_

</div>

****************************************************************************************************
 - class: part
 
# **How to lie with charts**

----------------------------------------------------------------------------------------------------

# How to lie with charts

### Presenting correct data in misleading ways

_<i class="fa fa-chart-pie"></i> Poor choice of visual channels_

_<i class="fa fa-puzzle-piece"></i> Misusing our ability to spot patterns_

_<i class="fa fa-align-left"></i> Ignoring implicit channel properties_

_<i class="fa fa-ruler"></i> Misleading perception of scaling_

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/arms.png" style="width:700px;margin-right:30px;margin-left:20px" />
<div class="fragment">

_Area is harder to see than position_

_Easy to confuse length (radius) and area_
 
</div>

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/solar.png" class="nb" style="width:600px;float:left;margin-right:30px" />
<div class="fragment">

_Humans are too good at seeing patterns!_

_Implied correlation with too few data points._

</div>

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/crop.png" class="nb" style="width:800px;margin-left:20pxmargin-right:30px" />
<div class="fragment">

_Value is position on common axis, not length!_

_Position channel suggests zero as minimum._

</div>

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/barrel.png" class="nb" style="width:500px;float:left;margin-right:30px" />
<div class="fragment" style="margin-top:40px">

**Value is length!**  
_(height of the barrel)_

_Perception of three-dimensional objects is misleading and difficult._

</div>

****************************************************************************************************
 - class: part
 
# **Beyond static charts**

----------------------------------------------------------------------------------------------------

# Beyond static charts

### Animations and interactive charts

_<i class="fa fa-search"></i> Allow exploration of large data_

_<i class="fa fa-book-open"></i> Tell a story through data_

_<i class="fa fa-surprise"></i> Element of surprise in visualization_

_<i class="fa fa-brain"></i> Make the viewer think critically_

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/dashboard.png" class="nb" />

----------------------------------------------------------------------------------------------------

# Beyond static charts

**Visualization for data exploration**

 - _Designed for experts_
 - _Viewer has motivation to explore_

**Visualization for data presentation**

 - _Readers do not interact with dashboards in NYT_
 - _How to tell a story with data?_
 - _Adapting standard reading metaphors_
 
----------------------------------------------------------------------------------------------------

<img src="images/dataviz/spiral.gif" class="nb" style="width:550px;float:left;margin-right:60px" />

Animation makes the point stronger.

<div style="padding-top:20px">

_Neat use of radial projection for circular value!_

</div>

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/hajj.png" onclick="document.getElementById('hajj').src='images/dataviz/hajj.gif';" id="hajj" 
  class="nb" style="width:680px;float:left;margin-right:30px;cursor:pointer;" />

**Scrollytelling**

_Adapts standard online reading interaction._

<br />

[_See article online at NYT_](http://www.nytimes.com/interactive/2016/09/06/world/middleeast/2015-hajj-stampede.html)

----------------------------------------------------------------------------------------------------

<img src="images/dataviz/youdraw.png" class="nb" style="width:680px;float:left;margin-right:30px" />

**You draw it!**

_Can data visualization make you think more critically?_

<br />

[_UK spending_](http://gamma.turing.ac.uk/expenditure/)  
[_NYT article_](https://www.nytimes.com/interactive/2017/01/15/us/politics/you-draw-obama-legacy.html)

****************************************************************************************************
 - class: part

# **Summary**

----------------------------------------------------------------------------------------------------

# **Summary**: Data visualizations

**What is data visualization?**

_Principled mapping of data variables to visual  
features such as position, shape, size and color._

### What we need to understand

 - Different types of data variables
 - Visual features and possible mappings
 - Limitations of human perception

----------------------------------------------------------------------------------------------------

# **Summary**: Data variables and visual channels

**Data variables**  

 - Categorical _(can distinguish between them)_
 - Ordinal _(can be ordered, but not measured)_
 - Quantitative _(sequential, diverging or cyclic)_

**Visual channels**  

 - Categorical _(color, shapes)_
 - Quantitative _(position, length, angle, area and color)_
 
**Remember error rates of visual channels!**

----------------------------------------------------------------------------------------------------

# CO582: Data visualization

**What you should remember from this lecture**

 - Systematic approach to data visualization
 - Mapping data variables to visual channels
 - Relevant properties of human perception
 
<br />
<br />

Tomas Petricek<br />
_[t.petricek@kent.ac.uk](mailto:t.petricek@kent.ac.uk) | [@tomaspetricek](http://twitter.com/tomaspetricek)_

****************************************************************************************************
 - class: part
 
# **References**

----------------------------------------------------------------------------------------------------

**Related courses**

 - [Visualization in HCI course by Adam Perer](https://cmu-vis-course.github.io/2017/schedule/)
 - [Research Skills course by Neil Dodgson](http://neildodgson.com/index.php/research-skills)

**Textbooks and papers**

 - [Visualization Analysis and Design](https://proquest.safaribooksonline.com/9781466508910)
 - [A Tour Through the Visualization Zoo](http://cacm.acm.org/magazines/2010/6/92482-a-tour-through-the-visualization-zoo/pdf)
 
**Online links** 

 - [Genomics Visualization - Aprameya Mysore](https://invizibility.github.io/blog/background/)
 - [How statistics lost their power - The Guardian](https://www.theguardian.com/politics/2017/jan/19/crisis-of-statistics-big-data-democracy)
 - [Data Age 2025 - Segate](https://www.seagate.com/files/www-content/our-story/trends/files/Seagate-WP-DataAge2025-March-2017.pdf)

