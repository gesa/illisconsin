---
layout: grid
title: Coming to Milwaukee
name: milwaukee
published: true
---

# Coming to Milwaukee

Are you traveling to Milwaukee for little ol’ us? Awesome! We’re really flattered
and wanted give some tips to make the trip as easy as possible.

---

### Planes

Milwaukee’s General Mitchell Airport is really convenient. It’s smallish (though
served by [Southwest](http://southwest.com/)!) and only a few minutes from the action
via interstate or surface streets. Flying in to Chicago is do-able with a car rental,
but without is a big pain in the CTA-to-Amtrak-to-MCTS-butt.

---

### Trains/Public Transit

Amtrak runs from [Chicago’s Union Station](http://www.amtrak.com/servlet/ContentServer?pagename=am/am2Station/Station_Page&code=CHI)
to Milwaukee for around $24 and has stops both at the [Milwaukee Airport](http://www.amtrak.com/servlet/ContentServer?pagename=am/am2Station/Station_Page&code=MKA)
and [downtown](http://www.amtrak.com/servlet/ContentServer?pagename=am/am2Station/Station_Page&code=MKE),
so it should be easy to get to a hotel.

The downside is that Milwaukee doesn’t have light rail and the buses are only kind
of convenient. You can check routes and time tables at [rideMCTS.com](http://ridemcts.com/).
Otherwise, if you'll just be in for a night or two from Illinois, Amtrak and cabs
are a doable, if slightly pricey, option.

---

### Automobiles

Milwaukee is far less congested than Chicago and parking is rarely hard. (Except
near the wedding venue. Sorry. The [Wedding Page](/wedding/) has more details on
that.) That said, cabs CANNOT be hailed on the street and must be called.

If you’re drinking, here’s a couple handy numbers to store in your cell phone:

- American United Taxi: 414-220-5000
- Yellow Cab Co-Op: 414-271-1800

---

### Hotel, Motel, Holiday Inn

Because so many people will have different preferences, we haven’t had any rooms
set aside. Milwaukee isn’t a big city and it’s pretty quick to get around. _Please
note, our wedding will be the same weekend as the [Milwaukee Air and Water Show](http://www.milwaukeeairshow.com/),
so **last minute bookings may be difficult**._ Also, some hotels have a three night
minimum because of the show. Here’s a range of places around town that may fit your
tastes, but anything Downtown, near the airport or east of the river on the East
Side would be a good choice. 

{% for hotel in site.hotels %}
- **{{ hotel.price }}** [{{ hotel.name }}]({{ hotel.url }})  
[{{ hotel.address }}](https://maps.google.com/maps?daddr={{ hotel.name | replace:' ','+'}}+{{ hotel.address | replace:' ','+' }})
{% endfor %}

---

### Food

Milwaukee has a shocking number of great restaurants. They aren’t all listed here,
but these are some of our favorites:  
(note: all of these restaurants have some sort of veg*n entree(s) available, but 
the ones with the big fat **V** will have a wider variety of choices.)

{% for restaurant in site.restaurants %}
- {% if restaurant.url %}[{{ restaurant.name }}]({{ restaurant.url }}){% else %}{{ restaurant.name }}{% endif %} {%if restaurant.veg == true %}**V**{% endif %} **({{ restaurant.price }})**  
[{{ restaurant.address }}](https://maps.google.com/maps?daddr={{ restaurant.name | replace:' ','+'}}+{{ restaurant.address | replace:' ','+' }})
{% endfor %}

---

### Drinks

This city comes in fifth place for bars per capita in the US—9.5 for every 10,000
residents. There may be some that are more convenient to your hotel/lodging, but
these are some of our favorites:

{% for bar in site.bars %}
- {%if bar.url %}[{{ bar.name }}]({{ bar.url }}){% else %}{{ bar.name }}{% endif %}  
[{{ bar.address }}](https://maps.google.com/maps?daddr={{ bar.name | replace:' ','+'}}+{{ bar.address | replace:' ','+' }})
{% endfor %}  
