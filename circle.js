function circumference(radius){
    return `circumference of circle with radius${radius} =  ${radius*Math.PI*2}`;
    }
    
    function area(radius){
    return `area of circle with radius ${radius}= ${Math.PI*radius*radius}`;
    }
    
    module.exports.circumference= circumference;
    module.exports.area=area;