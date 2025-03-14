
    am5.ready(function() {
    
      var root = am5.Root.new("chartdiv-fatiha");
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
      let siteUrl = document.getElementById("site-data").dataset.siteUrl;

      var series = root.container.children.push(am5wc.WordCloud.new(root, {
        maxCount: 100,
        minWordLength: 2,
        minFontSize: am5.percent(6),
        maxFontSize: am5.percent(8),
        angles: [0]
      }));
      
      var colorSet = am5.ColorSet.new(root, { step: 1 });
      
      // Configure labels
      series.labels.template.setAll({
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        fontFamily: "Courier New"
      });
      
      series.labels.template.setup = function(label) {
        label.set("background", am5.RoundedRectangle.new(root, { fillOpacity: 1, fill: colorSet.next() }))
      }
      series.labels.template.events.on("click", function(ev) {
        let category = ev.target.dataItem.dataContext.category; // Get clicked word
        let encodedCategory = encodeURIComponent(category); // Encode it for URL safety
        window.location.href = `${siteUrl}/Fatiha/index.html?word=${encodedCategory}`; // Redirect
    });
     
      series.data.setAll([
        { category: 'المنافقون', value: 10 }, 

        { category: "نور الإيمان", value: 5 },
        { category: "الآخرة", value: 2 }, 
        { category: "التناقض", value: 2 }, 
        { category: "المؤمنون", value: 2 }, 
        { category: "الكفر", value: 2 }
    ]);
  });