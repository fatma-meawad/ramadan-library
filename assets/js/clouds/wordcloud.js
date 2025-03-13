document.addEventListener("DOMContentLoaded", function () {
    if (typeof am5 === "undefined" || typeof am5wc === "undefined") {
        console.error("amCharts WordCloud library did not load.");
        return;
    }

    var el = document.getElementById("wordCloudChart");
    if (!el) return;

    var root = am5.Root.new(el);
    root.rtl = true;

    root.setThemes([am5themes_Animated.new(root)]);

    var series = root.container.children.push(am5wc.WordCloud.new(root, {
        maxCount: 100,
        minWordLength: 2,
        minFontSize: am5.percent(6),
        maxFontSize: am5.percent(12),
        angles: [0],
        rtl: true
    }));

    var colorSet = am5.ColorSet.new(root, { step: 1 });

    series.labels.template.setAll({
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        fontFamily: "Tajawal, Arial, sans-serif",
        fontSize: am5.percent(10),
        direction: "rtl",
        textAlign: "right",
        cursor: "pointer",
        background: am5.RoundedRectangle.new(root, { fillOpacity: 1, fill: colorSet.next() })
    });

    // Set the data
    series.data.setAll([
        { "category": "القرآن", "value": 10 },
        { "category": "الكون", "value": 8 },
        { "category": "الفطرة", "value": 7 }
    ]);
});
