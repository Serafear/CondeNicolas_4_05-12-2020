n=o.getProjection(),r=t.marker.getPosition();t.pixel=n.fromLatLngToContainerPixel(r),T(e,t)}}else T(e,t);var n=p("gmaps_context_menu");setTimeout((function(){n.style.display="block"}),0)},this.setContextMenu=function(e){window.context_menu[s.el.id][e.control]={};var o,n=t.createElement("ul");for(o in e.options)if(e.options.hasOwnProperty(o)){var r=e.options[o];window.context_menu[s.el.id][e.control][r.name]={title:r.title,action:r.action}}n.id="gmaps_context_menu",n.style.display="none",n.style.position="absolute",n.style.minWidth="100px",n.style.background="white",n.style.listStyle="none",n.style.padding="8px",n.style.boxShadow="2px 2px 6px #ccc",p("gmaps_context_menu")||t.body.appendChild(n);var i=p("gmaps_context_menu");google.maps.event.addDomListener(i,"mouseout",(function(e){e.relatedTarget&&this.contains(e.relatedTarget)||window.setTimeout((function(){i.style.display="none"}),400)}),!1)},this.hideContextMenu=function(){var e=p("gmaps_context_menu");e&&(e.style.display="none")};var z=function(t,o){google.maps.event.addListener(t,o,(function(t){null==t&&(t=this),e[o].apply(this,[t]),s.hideContextMenu()}))};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var S=0;S<a.length;S++)(W=a[S])in e&&z(this.map,W);for(S=0;S<g.length;S++){var W;(W=g[S])in e&&z(this.map,W)}google.maps.event.addListener(this.map,"rightclick",(function(t){e.rightclick&&e.rightclick.apply(this,[t]),null!=window.context_menu[s.el.id].map&&s.buildContextMenu("map",t)})),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var e,t=[],o=this.markers.length;for(e=0;e<o;e++)"boolean"==typeof this.markers[e].visible&&this.markers[e].visible&&t.push(this.markers[e].getPosition());this.fitLatLngBounds(t)},this.fitLatLngBounds=function(e){var t,o=e.length,n=new google.maps.LatLngBounds;for(t=0;t<o;t++)n.extend(e[t]);this.map.fitBounds(n)},this.setCenter=function(e,t,o){this.map.panTo(new google.maps.LatLng(e,t)),o&&o()},this.getElement=function(){return this.el},this.zoomIn=function(e){e=e||1,this.zoom=this.map.getZoom()+e,this.map.setZoom(this.zoom)},this.zoomOut=function(e){e=e||1,this.zoom=this.map.getZoom()-e,this.map.setZoom(this.zoom)};var R,I=[];for(R in this.map)"function"!=typeof this.map[R]||this[R]||I.push(R);for(r=0;r<I.length;r++)!function(e,t,o){e[o]=function(){return t[o].apply(t,arguments)}}(this,this.map,I[r])};return o}();return g.prototype.createControl=function(e){var t=document.createElement("div");for(var o in t.style.cursor="pointer",!0!==e.disableDefaultStyles&&(t.style.fontFamily="Roboto, Arial, sans-serif",t.style.fontSize="11px",t.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px"),e.style)t.style[o]=e.style[o];for(var n in e.id&&(t.id=e.id),e.title&&(t.title=e.title),e.classes&&(t.className=e.classes),e.content&&("string"==typeof e.content?t.innerHTML=e.content:e.content instanceof HTMLElement&&t.appendChild(e.content)),e.position&&(t.position=google.maps.ControlPosition[e.position.toUpperCase()]),e.events)!function(t,o){google.maps.event.addDomListener(t,o,(function(){e.events[o].apply(this,[this])}))}(t,n);return t.index=1,t},g.prototype.addControl=function(e){var t=this.createControl(e);return this.controls.push(t),this.map.controls[t.position].push(t),t},g.prototype.removeControl=function(e){var t,o=null;for(t=0;t<this.controls.length;t++)this.controls[t]==e&&(o=this.controls[t].position,this.controls.splice(t,1));if(o)for(t=0;t<this.map.controls.length;t++){var n=this.map.controls[e.position];if(n.getAt(t)==e){n.removeAt(t);break}}return e},g.prototype.createMarker=function(e){if(null==e.lat&&null==e.lng&&null==e.position)throw"No latitude or longitude defined.";var t=this,o=e.details,r=e.fences,i=e.outside,s={position:new google.maps.LatLng(e.lat,e.lng),map:null},a=n(s,e);delete a.lat,delete a.lng,delete a.fences,delete a.outside;var l=new google.maps.Marker(a);if(l.fences=r,e.infoWindow){l.infoWindow=new google.maps.InfoWindow(e.infoWindow);for(var p=["closeclick","content_changed","domready","position_changed","zindex_changed"],c=0;c<p.length;c++)!function(t,o){e.infoWindow[o]&&google.maps.event.addListener(t,o,(function(t){e.infoWindow[o].apply(this,[t])}))}(l.infoWindow,p[c])}var g=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],h=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"];for(c=0;c<g.length;c++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,(function(){e[o].apply(this,[this])}))}(l,g[c]);for(c=0;c<h.length;c++)!function(t,o,n){e[n]&&google.maps.event.addListener(o,n,(function(o){o.pixel||(o.pixel=t.getProjection().fromLatLngToPoint(o.latLng)),e[n].apply(this,[o])}))}(this.map,l,h[c]);return google.maps.event.addListener(l,"click",(function(){this.details=o,e.click&&e.click.apply(this,[this]),l.infoWindow&&(t.hideInfoWindows(),l.infoWindow.open(t.map,l))})),google.maps.event.addListener(l,"rightclick",(function(o){o.marker=this,e.rightclick&&e.rightclick.apply(this,[o]),null!=window.context_menu[t.el.id].marker&&t.buildContextMenu("marker",o)})),l.fences&&google.maps.event.addListener(l,"dragend",(function(){t.checkMarkerGeofence(l,(function(e,t){i(e,t)}))})),l},g.prototype.addMarker=function(e){var t;if(e.hasOwnProperty("gm_accessors_"))t=e;else{if(!(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position))throw"No latitude or longitude defined.";t=this.createMarker(e)}return t.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(t),this.markers.push(t),g.fire