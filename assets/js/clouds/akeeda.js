
    am5.ready(function() {
    
      var root = am5.Root.new("chartdiv-akeeda");
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
    
      var series = root.container.children.push(am5wc.WordCloud.new(root, {
        maxCount: 100,
        minWordLength: 2,
        minFontSize: am5.percent(5),
        maxFontSize: am5.percent(8),
        angles: [0]
      }));
      
      var colorSet = am5.ColorSet.new(root, { step: 1 });
      
      // Configure labels
      series.labels.template.setAll({
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        fontFamily: "Courier New"
      });
      
      series.labels.template.setup = function(label) {
        label.set("background", am5.RoundedRectangle.new(root, { fillOpacity: 1, fill: colorSet.next() }))
      }
    
      series.labels.template.events.on("click", function(ev) {
        let category = ev.target.dataItem.dataContext.category; // Get clicked word
        let encodedCategory = encodeURIComponent(category); // Encode it for URL safety
        window.location.href = `//Akeedah/index.html?word=${encodedCategory}`; // Redirect
    });
          series.data.setAll([
            { category: 'العقل', value: 8 },
            { category: 'الوحي', value: 4 },
            { category: 'الكون', value: 6 },
            { category: 'العبادة', value: 6 },
            { category: 'الاستقامة', value: 5 },
            { category: 'السعادة', value: 5 },
            { category: 'الإسلام', value: 6 },
            { category: 'الإيمان', value: 7 },
            { category: 'التفكر', value: 7 },
            { category: 'التكليف', value: 5 },
            { category: 'الفطرة', value: 7 },
            { category: 'القرآن', value: 5 },
            { category: 'معرفة الله', value: 4 },
            { category: 'الإعجاز العلمي', value: 5 },
            { category: 'القرآن الكريم', value: 6 }
        ]);});
        