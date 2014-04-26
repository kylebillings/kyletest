/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "keyboard-09": {
        "strokepath": [
            {
                "path": "M 8.5 0 L 8.5 253",
                "duration": 200
            },
            {
                "path": "M 601.5 0 L 601.5 253",
                "duration": 200
            },
            {
                "path": "M 0 13.5 L 611 13.5",
                "duration": 200
            },
            {
                "path": "M 0 240.5 L 611 240.5",
                "duration": 200
            },
            {
                "path": "M 0 36.5 L 611 36.5",
                "duration": 200
            },
            {
                "path": "M 0 41.5 L 611 41.5",
                "duration": 200
            },
            {
                "path": "M 611 75.5 L 0 75.5",
                "duration": 200
            },
            {
                "path": "M 611 81.5 L 0 81.5",
                "duration": 200
            },
            {
                "path": "M 0 115.5 L 611 115.5",
                "duration": 200
            },
            {
                "path": "M 0 121.5 L 611 121.5",
                "duration": 200
            },
            {
                "path": "M 611 155.5 L 0 155.5",
                "duration": 200
            },
            {
                "path": "M 611 161.5 L 0 161.5",
                "duration": 200
            },
            {
                "path": "M 0 195.5 L 611 195.5",
                "duration": 200
            },
            {
                "path": "M 0 200.5 L 611 200.5",
                "duration": 200
            }
        ],
        "dimensions": {
            "width": 611,
            "height": 253
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#keyboard-09').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 1,
    "strokeColor": "#fff"
}).lazylinepainter('paint'); 
 });