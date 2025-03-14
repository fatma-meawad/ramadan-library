
    am5.ready(function() {
    
      var root = am5.Root.new("chartdiv-fatiha");
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
    
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
    
     
        series.data.setAll([
     {category: 'المنافقون', value: '7'},
{category: 'القرآن', value: '4'} ]);});
      