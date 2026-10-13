class GeometricFigure{
    area(){
        console.log("Area of any Geometric Figure")
    }
}
 
class Square extends GeometricFigure{
    area(){
        let side=5
        console.log("Area of Sqaure :"+(side * side))
    }
}
 
class Rectangle extends GeometricFigure{
    area(){
        let length=5
        let breadth=10
        console.log("Area of Rectangle :"+(length * breadth))
    }
}
 
class Circle extends GeometricFigure{
    area(){
        let radius=5
        console.log("Area of Cicle :"+(Math.PI * radius * radius))
    }
}
 
let figure=new GeometricFigure()
figure.area()
 
figure=new Square()
figure.area()
 
figure=new Rectangle()
figure.area()
 
figure=new Circle()
figure.area()